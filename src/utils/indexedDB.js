// IndexedDB utility for storing custom holidays
const DB_NAME = 'HolidaysDB';
const DB_VERSION = 1;
const STORE_NAME = 'customHolidays';

// Initialize the database
export const initDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => {
      reject(request.error);
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      
      // Create object store if it doesn't exist
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        store.createIndex('date', 'date', { unique: false });
        store.createIndex('name', 'name', { unique: false });
      }
    };
  });
};

// Add a new holiday to IndexedDB
export const addHolidayToDB = async (holiday) => {
  try {
    const db = await initDB();
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    
    const request = store.add(holiday);
    
    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        resolve(holiday);
      };
      
      request.onerror = () => {
        reject(request.error);
      };
    });
  } catch (error) {
    console.error('Error adding holiday to DB:', error);
    throw error;
  }
};

// Get all custom holidays from IndexedDB
export const getHolidaysFromDB = async () => {
  try {
    const db = await initDB();
    const transaction = db.transaction([STORE_NAME], 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    
    const request = store.getAll();
    
    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        resolve(request.result);
      };
      
      request.onerror = () => {
        reject(request.error);
      };
    });
  } catch (error) {
    console.error('Error getting holidays from DB:', error);
    return [];
  }
};

// Delete a holiday from IndexedDB
export const deleteHolidayFromDB = async (holidayId) => {
  try {
    const db = await initDB();
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    
    const request = store.delete(holidayId);
    
    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        resolve(holidayId);
      };
      
      request.onerror = () => {
        reject(request.error);
      };
    });
  } catch (error) {
    console.error('Error deleting holiday from DB:', error);
    throw error;
  }
};

// Update a holiday in IndexedDB
export const updateHolidayInDB = async (holiday) => {
  try {
    const db = await initDB();
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    
    const request = store.put(holiday);
    
    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        resolve(holiday);
      };
      
      request.onerror = () => {
        reject(request.error);
      };
    });
  } catch (error) {
    console.error('Error updating holiday in DB:', error);
    throw error;
  }
};

// Clear all custom holidays from IndexedDB
export const clearAllHolidaysFromDB = async () => {
  try {
    const db = await initDB();
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);

    const request = store.clear();

    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        resolve();
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  } catch (error) {
    console.error('Error clearing holidays from DB:', error);
    throw error;
  }
};

// Update yearly repeating holidays to show next occurrence
export const updateYearlyRepeatingHolidays = async () => {
  try {
    const holidays = await getHolidaysFromDB();
    const today = new Date();
    const currentYear = today.getFullYear();

    const updatedHolidays = holidays.map(holiday => {
      if (holiday.isYearlyRepeating && holiday.originalDate) {
        const originalDate = new Date(holiday.originalDate);
        let nextOccurrence = new Date(currentYear, originalDate.getMonth(), originalDate.getDate());

        // If the date has already passed this year, use next year
        if (nextOccurrence <= today) {
          nextOccurrence = new Date(currentYear + 1, originalDate.getMonth(), originalDate.getDate());
        }

        const dateRender = (date) => {
          let year = date.getFullYear();
          let month = date.getMonth() + 1;
          let day = date.getDate();
          return `${year}-${month}-${day}`;
        };

        return {
          ...holiday,
          date: dateRender(nextOccurrence)
        };
      }
      return holiday;
    });

    // Update all holidays in the database
    const db = await initDB();
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);

    for (const holiday of updatedHolidays) {
      await new Promise((resolve, reject) => {
        const request = store.put(holiday);
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
      });
    }

    return updatedHolidays;
  } catch (error) {
    console.error('Error updating yearly repeating holidays:', error);
    throw error;
  }
};

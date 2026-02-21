import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import InputField from './components/inputField/InputField.js';
import HoliData from './components/Holidata';
import DateCardComponent from './components/cardcomponent/date-card-component';
import { getHolidaysFromDB, addHolidayToDB, deleteHolidayFromDB, updateYearlyRepeatingHolidays } from './utils/indexedDB';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      HoliData: [...HoliData], // Create a copy to avoid mutating the original
      customHolidays: [], // Store custom holidays from IndexedDB
      isOpen: false,
      loading: true,
    };
  }

  // Load custom holidays from IndexedDB when component mounts
  async componentDidMount() {
    try {
      // Update yearly repeating holidays first
      await updateYearlyRepeatingHolidays();

      // Then load all holidays
      const customHolidays = await getHolidaysFromDB();
      this.setState({
        customHolidays,
        loading: false
      });
    } catch (error) {
      console.error('Error loading custom holidays:', error);
      this.setState({ loading: false });
    }
  }

  toggle = (id) => {
    return () => {
      const HoliData = this.state.HoliData.map((holiday) => {
        if (holiday.id === id) {
          holiday.isOpen = !holiday.isOpen;
        }
        return holiday;
      });
      this.setState({ HoliData });
    };
  };

  //reload the state of the cards
  reloadCards = () => {
    this.setState({ HoliData: [...HoliData] });
  };

  // Add a new holiday to IndexedDB and state
  addHoliday = async (newHoliday) => {
    try {
      // Add to IndexedDB
      await addHolidayToDB(newHoliday);

      // Update state
      this.setState(prevState => ({
        customHolidays: [...prevState.customHolidays, newHoliday]
      }));

      console.log('Holiday added successfully:', newHoliday);
    } catch (error) {
      console.error('Error adding holiday:', error);
      alert('Failed to add holiday. Please try again.');
    }
  };

  // Delete a custom holiday
  deleteHoliday = async (holidayId) => {
    try {
      // Remove from IndexedDB
      await deleteHolidayFromDB(holidayId);

      // Update state
      this.setState(prevState => ({
        customHolidays: prevState.customHolidays.filter(holiday => holiday.id !== holidayId)
      }));

      console.log('Holiday deleted successfully:', holidayId);
    } catch (error) {
      console.error('Error deleting holiday:', error);
      alert('Failed to delete holiday. Please try again.');
    }
  };

  // Get all holidays (built-in + custom)
  getAllHolidays = () => {
    return [...this.state.HoliData, ...this.state.customHolidays];
  };

  render() {
    if (this.state.loading) {
      return (
        <div className='App'>
          <div style={{ textAlign: 'center', padding: '50px' }}>
            <h2>Loading holidays...</h2>
          </div>
        </div>
      );
    }

    const allHolidays = this.getAllHolidays();

    return (
      <BrowserRouter>
        <div className='App'>
          <main className='app--screen'>
          <header className='App-header text-center'>
            <h1>🎈 The Days Left Until... 🎂</h1>
            <p className='lead mt-2' style={{ opacity: 0.9, fontWeight: 500 }}>Count down to your favorite holidays and events!</p>
          </header>

            <div className='time-grid'>
              {allHolidays.map((holiday) => {
                const isCustomHoliday = this.state.customHolidays.some(ch => ch.id === holiday.id);
                return (
                  <DateCardComponent
                    onClick={this.toggle(holiday.id)}
                    key={holiday.id}
                    id={holiday.id}
                    date={holiday.date}
                    name={holiday.name}
                    description={holiday.description}
                    image={holiday.image}
                    isCustom={isCustomHoliday}
                    isYearlyRepeating={holiday.isYearlyRepeating}
                    onDelete={isCustomHoliday ? this.deleteHoliday : null}
                  />
                );
              })}
            </div>
          </main>
          <InputField
            HoliData={this.state.HoliData}
            isOpen={this.state.isOpen}
            reloadCards={this.reloadCards}
            addHoliday={this.addHoliday}
          ></InputField>
        </div>
      </BrowserRouter>
    );
  }
}

export default MainPage;

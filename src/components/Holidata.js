//get the date for New years Day next year in the YYYY-MM-DD format
const getNYDDate = () => {
  let date = new Date();
  let year = date.getFullYear() + 1;
  let month = '01';
  let day = '01';
  return `${year}-${month}-${day}`;
};

//get the date for the next upcoming Christmas Day in the YYYY-MM-DD format
const getNextChristmasDate = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = '12';
  let day = '25';
  return `${year}-${month}-${day}`;
};

//get the next upcoming Presidents Day in the YYYY-MM-DD format
const getNextPresidentsDate = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = '02';
  let day = '17';
  return `${year}-${month}-${day}`;
};

// get the next upcoming Memorial Day in the YYYY-MM-DD format
const getNextMemorialDate = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = '05';
  let day = '25';
  return `${year}-${month}-${day}`;
};

//get the next upcoming Thanksgiving Day in the YYYY-MM-DD format
const getNextThanksgivingDate = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = '11';
  let day = '26';
  return `${year}-${month}-${day}`;
};

//get the next upcoming Halloween in the YYYY-MM-DD format
const getNextHalloweenDate = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = '10';
  let day = '31';
  return `${year}-${month}-${day}`;
};
//get the next upcoming MLKDate in the mLKDates Array in the YYYY-MM-DD format
const mLKDates = [
  '2022-1-17',
  '2023-1-16',
  '2024-1-15',
  '2025-1-20',
  '2026-1-19',
  '2027-1-18',
  '2028-1-17',
  '2029-1-16',
  '2030-1-15',
  '2031-1-20',
  '2032-1-19',
  '2033-1-18',
  '2034-1-17',
  '2035-1-16',
  '2036-1-15',
  '2037-1-20',
  '2038-1-19',
  '2039-1-18',
  '2040-1-17',
  '2041-1-16',
  '2042-1-15',
  '2043-1-20',
  '2044-1-19',
  '2045-1-18',
  '2046-1-17',
  '2047-1-16',
  '2048-1-15',
  '2049-1-20',
  '2050-1-19',
  '2051-1-18',
  '2052-1-17',
  '2053-1-16',
  '2054-1-15',
  '2055-1-20',
  '2056-1-19',
  '2057-1-18',
  '2058-1-17',
  '2059-1-16',
  '2060-1-15',
  '2061-1-20',
  '2062-1-19',
  '2063-1-18',
  '2064-1-17',
  '2065-1-16',
  '2066-1-15',
  '2067-1-20',
  '2068-1-19',
  '2069-1-18',
  '2070-1-17',
  '2071-1-16',
  '2072-1-15',
  '2073-1-20',
  '2074-1-19',
  '2075-1-18',
  '2076-1-17',
  '2077-1-16',
  '2078-1-15',
  '2079-1-20',
  '2080-1-19',
  '2081-1-18',
  '2082-1-17',
  '2083-1-16',
  '2084-1-15',
];
const getNextMLKDate = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let nextMLKDate = mLKDates[month];
  if (nextMLKDate === undefined) {
    nextMLKDate = mLKDates[0];
  }
  if (nextMLKDate > `${year}-${month}-${day}`) {
    return nextMLKDate;
  } else {
    return mLKDates[month + 1];
  }
};
//get next fourth of July in the YYYY-MM-DD format
const getNextFourthOfJulyDate = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = '07';
  let day = '21';
  return `${year}-${month}-${day}`;
};

//get next new years eve in the YYYY-MM-DD format
const getNextNewYearsEveDate = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = '12';
  let day = '31';
  return `${year}-${month}-${day}`;
};

const HoliData = [
  //2021

  {
    id: 1,
    date: getNYDDate(),
    name: "New Year's Day",
    description:
      "New Years' Day is a time to relax and enjoy the start of a bright and promising new year....a new beginning. It is a time to be with family. After all, you haven't seen your mother in law since last year.",
  },
  {
    id: 2,
    date: getNextMLKDate(),
    name: 'Martin Luther King, Jr. Day',
    description: 'Martin Luther King, Jr. Day is observed on January 18th',
  },
  {
    id: 3,
    date: '2022-01-21',
    name: 'Inauguration Day',
    description: 'Inauguration Day is observed on January 20th',
  },
  {
    id: 4,
    date: getNextPresidentsDate(),
    name: 'Presidents Day',
    description: 'Presidents Day is observed on February 15th',
  },
  {
    id: 5,
    date: '2021-04-02',
    name: 'Good Friday',
    description: 'Good Friday is observed on April 2nd',
  },

  {
    id: 8,
    date: '2021-06-18',
    name: 'Juneteenth',
    description: 'Juneteenth is observed on June 18th',
  },
  {
    id: 9,
    date: getNextFourthOfJulyDate(),
    name: '4th of July',
    description: '4th of July is observed on July 5th',
  },
  {
    id: 10,
    date: '2021-09-06',
    name: 'Labour Day',
    description: 'Labour Day is observed on September 6th',
  },
  {
    id: 11,
    date: '2021-10-11',
    name: 'Columbus Day',
    description: 'Columbus Day is observed on October 11th',
  },
  {
    id: 12,
    date: '2021-11-11',
    name: 'Veterans Day',
    description: 'Veterans Day is observed on November 11th',
  },
  {
    id: 13,
    date: getNextThanksgivingDate(),
    name: 'Thanksgiving Day',
    description: 'Thanksgiving Day is observed on November 25th',
  },
  {
    id: 14,
    date: getNextChristmasDate(),
    name: 'Christmas Day',
  },
  {
    id: 15,
    name: 'Easter',
    date: '2022-04-17',
  },
  {
    id: 16,
    name: 'Halloween',
    date: getNextHalloweenDate(),
  },

  {
    id: 17,
    name: "New Year's Eve",
    date: getNextNewYearsEveDate(),
  },
  {
    id: 18,
    name: 'Your Birthday',
    date: '2022-07-21',
  },
  {
    id: 19,
    name: 'Last Day of School',
    date: '2022-05-16',
  },

  {
    id: 21,
    date: '2022-01-18',
    name: 'Martin Luther King, Jr. Day',
  },
  {
    id: 22,
    date: '2022-01-20',
    name: 'Inauguration Day',
  },

  {
    id: 24,
    date: '2022-04-02',

    name: 'Good Friday',
  },
  {
    id: 25,
    date: '2022-04-02',
    name: 'Good Friday',
  },
  {
    id: 26,
    date: getNextMemorialDate(),
    name: 'Memorial Day',
  },
  {
    id: 27,
    date: '2022-06-18',
    name: 'Juneteenth',
  },

  {
    id: 29,
    date: '2022-09-06',
    name: 'Labour Day',
  },
  {
    id: 30,
    date: '2022-10-11',
    name: 'Columbus Day',
  },
  {
    id: 31,
    date: '2022-11-11',
    name: 'Veterans Day',
  },

  {
    id: 34,
    name: 'Easter',
    date: '2023-04-16',
  },

  {
    id: 37,
    name: 'Your Birthday',
    date: '2023-07-20',
  },
  {
    id: 38,
    name: 'Last Day of School',
    date: '2023-05-15',
  },

  {
    id: 40,
    date: '2023-01-18',
    name: 'Martin Luther King, Jr. Day',
  },
  {
    id: 41,
    date: '2023-01-20',
    name: 'Inauguration Day',
  },

  {
    id: 43,
    date: '2023-04-02',
    name: 'Good Friday',
  },
  {
    id: 44,
    date: '2023-04-02',
    name: 'Good Friday',
  },

  {
    id: 46,
    date: '2023-06-18',
    name: 'Juneteenth',
  },

  {
    id: 48,
    date: '2023-09-06',
    name: 'Labour Day',
  },
  {
    id: 49,
    date: '2023-10-11',
    name: 'Columbus Day',
  },
  {
    id: 50,
    date: '2023-11-11',
    name: 'Veterans Day',
  },

  {
    id: 53,
    name: 'Easter',
    date: '2024-04-14',
  },
];

export default HoliData;

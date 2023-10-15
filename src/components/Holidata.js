const renderDate = (date) => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return `${year}-${month}-${day}`;
};
const date = new Date();
//get the date for New years Day next year in the YYYY-MM-DD format
const getNYDDate = () => {
  let nYearsDate = new Date(date.getFullYear(), 0, 1);
  if (nYearsDate < date) {
    nYearsDate = new Date(date.getFullYear() + 1, 0, 1);
  }
  return renderDate(nYearsDate);
};

//get the date for the next upcoming Christmas Day in the YYYY-MM-DD format
const getNextChristmasDate = () => {
  let XmasDate = new Date(date.getFullYear(), 11, 25);
  if (XmasDate < date) {
    XmasDate = new Date(date.getFullYear() + 1, 11, 25);
  }
  return renderDate(XmasDate);
};

//get the next upcoming Presidents Day in the YYYY-MM-DD format
const getNextPresidentsDate = () => {
  let presDayDate = new Date(date.getFullYear(), 1, 15);
  if (presDayDate < date) {
    presDayDate = new Date(date.getFullYear() + 1, 1, 15);
  }
  return renderDate(presDayDate);
};

// get the next upcoming Memorial Day in the YYYY-MM-DD format
const getNextMemorialDate = () => {
  let memorialDayDate = new Date(date.getFullYear(), 4, 31);
  if (memorialDayDate < date) {
    memorialDayDate = new Date(date.getFullYear() + 1, 4, 31);
  }
  return renderDate(memorialDayDate);
};

//get the next upcoming Thanksgiving Day in the YYYY-MM-DD format
const getNextThanksgivingDate = () => {
  let thanksgivingDate = new Date(date.getFullYear(), 10, 25);
  if (thanksgivingDate < date) {
    thanksgivingDate = new Date(date.getFullYear() + 1, 10, 25);
  }
  return renderDate(thanksgivingDate);
};

//get the next upcoming Halloween in the YYYY-MM-DD format
const getNextHalloweenDate = () => {
  let halloweenDate = new Date(date.getFullYear(), 9, 31);
  if (halloweenDate < date) {
    halloweenDate = new Date(date.getFullYear() + 1, 9, 31);
  }
  return renderDate(halloweenDate);
};

//get the next upcoming MLKDate in the mLKDates Array in the YYYY-MM-DD format
const mLKDates = [
  new Date('2022-1-17'),
  new Date('2023-1-16'),
  new Date('2024-1-15'),
  new Date('2025-1-20'),
  new Date('2026-1-19'),
  new Date('2027-1-18'),
  new Date('2028-1-17'),
  new Date('2029-1-15'),
  new Date('2030-1-21'),
];
const getCurrentUpcomingMLKDate = () => {
  for (let i = 0; i < mLKDates.length; i++) {
    if (
      mLKDates[i] > date && //if the date in the array is greater than today's date
      mLKDates[i] < //and the date in the array is less than the next date in the array
        mLKDates[i + 1]
    ) {
      const renderedDate = renderDate(mLKDates[i]);
      return renderedDate;
    }
  }
};

const easterDates = [
  new Date('2021-04-04'),
  new Date('2022-04-17'),
  new Date('2023-04-09'),
  new Date('2024-03-31'),
  new Date('2025-04-20'),
  new Date('2026-04-05'),
  new Date('2027-03-28'),
  new Date('2028-04-16'),
  new Date('2029-04-01'),
  new Date('2030-04-21'),
];

const getNextEasterDate = () => {
  for (let i = 0; i < easterDates.length; i++) {
    if (
      easterDates[i] > date && //if the date in the array is greater than today's date
      easterDates[i] < //and the date in the array is less than the next date in the array
        easterDates[i + 1]
    ) {
      return renderDate(easterDates[i]);
    }
  }
};

//get next fourth of July in the YYYY-MM-DD format
const getNextFourthOfJulyDate = () => {
  let fourthOfJulyDate = new Date(date.getFullYear(), 6, 4);
  if (fourthOfJulyDate < date) {
    fourthOfJulyDate = new Date(date.getFullYear() + 1, 6, 4);
  }
  return renderDate(fourthOfJulyDate);
};

//get next new years eve in the YYYY-MM-DD format
const getNextNewYearsEveDate = () => {
  let newYearsEveDate = new Date(date.getFullYear(), 11, 31);
  if (newYearsEveDate < date) {
    newYearsEveDate = new Date(date.getFullYear() + 1, 11, 31);
  }
  return renderDate(newYearsEveDate);
};

const getJuneteenthDate = () => {
  let JuneteenthDate = new Date(date.getFullYear(), 5, 19);
  if (JuneteenthDate < date) {
    JuneteenthDate = new Date(date.getFullYear() + 1, 5, 19);
  }
  return renderDate(JuneteenthDate);
};

const getLaborDayDate = () => {
  let laborDayDate = new Date(date.getFullYear(), 8, 1);
  if (laborDayDate < date) {
    laborDayDate = new Date(date.getFullYear() + 1, 8, 1);
  }
  return renderDate(laborDayDate);
};

const getValentinesDayDate = () => {
  let ValentinesDayDate = new Date(date.getFullYear(), 1, 14);
  if (ValentinesDayDate < date) {
    ValentinesDayDate = new Date(date.getFullYear() + 1, 1, 14);
  }
  return renderDate(ValentinesDayDate);
};

const getVeteransDayDate = () => {
  let VeteransDayDate = new Date(date.getFullYear(), 10, 11);
  if (VeteransDayDate < date) {
    VeteransDayDate = new Date(date.getFullYear() + 1, 10, 11);
  }
  return renderDate(VeteransDayDate);
};

const goodFridayDates = [
  new Date('2021-04-02'),
  new Date('2022-04-15'),
  new Date('2023-04-07'),
  new Date('2024-03-29'),
  new Date('2025-04-18'),
  new Date('2026-04-03'),
  new Date('2027-03-26'),
  new Date('2028-04-14'),
  new Date('2029-03-30'),
  new Date('2030-04-19'),
];

const getNextGoodFridayDate = () => {
  for (let i = 0; i < goodFridayDates.length; i++) {
    if (
      goodFridayDates[i] > date && //if the date in the array is greater than today's date
      goodFridayDates[i] < //and the date in the array is less than the next date in the array
        goodFridayDates[i + 1]
    ) {
      return renderDate(goodFridayDates[i]);
    }
  }
};

const getAprilFoolsDate = () => {
  let AprilFoolsDate = new Date(date.getFullYear(), 3, 1);
  if (AprilFoolsDate < date) {
    AprilFoolsDate = new Date(date.getFullYear() + 1, 3, 1);
  }
  return renderDate(AprilFoolsDate);
};

const yourBirthdayDate = () => {
  let yourBirthdayDate = new Date(date.getFullYear(), 6, 20);
  if (yourBirthdayDate < date) {
    yourBirthdayDate = new Date(date.getFullYear() + 1, 6, 20);
  }
  return renderDate(yourBirthdayDate);
};

const lastDayOfSchoolDate = () => {
  let lastDayOfSchoolDate = new Date(date.getFullYear(), 4, 15);
  if (lastDayOfSchoolDate < date) {
    lastDayOfSchoolDate = new Date(date.getFullYear() + 1, 4, 15);
  }
  return renderDate(lastDayOfSchoolDate);
};

const inaugurationDates = [
  new Date('2021-01-20'),
  new Date('2025-01-20'),
  new Date('2029-01-20'),
];

const getInaugurationDate = () => {
  for (let i = 0; i < inaugurationDates.length; i++) {
    if (
      inaugurationDates[i] > date && //if the date in the array is greater than today's date
      inaugurationDates[i] < //and the date in the array is less than the next date in the array
        inaugurationDates[i + 1]
    ) {
      return renderDate(inaugurationDates[i]);
    }
  }
};

const HoliData = [
  {
    id: 1,
    date: getNYDDate(),
    name: "New Year's Day",
    description:
      "New Years' Day is a time to relax and enjoy the start of a bright and promising new year....a new beginning. It is a time to be with family. After all, you haven't seen your mother in law since last year.",
  },
  {
    id: 2,
    date: getCurrentUpcomingMLKDate(),
    name: 'Martin Luther King, Jr. Day',
    description: 'Martin Luther King, Jr. Day is a day to honor MLK',
  },
  {
    id: 3,
    date: getValentinesDayDate(),
    name: 'Valentines Day',
    description: 'Valentines Day is a celebration of love and romance',
  },
  {
    id: 4,
    date: getNextPresidentsDate(),
    name: 'Presidents Day',
    description: 'Presidents Day is a day to honor all US Presidents',
  },
  {
    id: 8,
    date: getJuneteenthDate(),
    name: 'Juneteenth',
    description:
      'Juneteenth is a day to celebrate African American freedom from slavery',
  },
  {
    id: 9,
    date: getNextFourthOfJulyDate(),
    name: '4th of July',
    description:
      '4th of July is a day to celebrate the birth of the United States of America',
  },
  {
    id: 10,
    date: getLaborDayDate(),
    name: 'Labor Day',
    description: 'Labour Day is a day to celebrate the American worker',
  },
  {
    id: 12,
    date: getVeteransDayDate(),
    name: 'Veterans Day',
    description: 'Veterans Day is a day to honor all who have served',
  },
  {
    id: 13,
    date: getNextThanksgivingDate(),
    name: 'Thanksgiving Day',
    description: 'Thanksgiving Day is a day to give thanks for all we have',
  },
  {
    id: 14,
    date: getNextChristmasDate(),
    name: 'Christmas Day',
    description:
      'Christmas Day is a day to celebrate the birth of Jesus Christ',
  },
  {
    id: 15,
    name: 'Easter',
    date: getNextEasterDate(),
    description:
      'Easter is a Christian holiday that celebrates the belief in the resurrection of Jesus Christ. In the New Testament of the Bible, the event is said to have occurred three days after Jesus was crucified by the Romans and died in roughly 30 A.D. The holiday concludes the “Passion of Christ,” a series of events and holidays that begins with Lent—a 40-day period of fasting, prayer and sacrifice—and ends with Holy Week, which includes Holy Thursday (the celebration of Jesus’ Last Supper with his 12 Apostles), Good Friday (on which Jesus’ crucifixion is observed), and Easter Sunday. Although a holiday of high religious significance in the Christian faith, many traditions associated with Easter date back to pre-Christian, pagan times.',
  },
  {
    id: 16,
    name: 'Halloween',
    date: getNextHalloweenDate(),
    description: 'Halloween is a day to celebrate the dead',
  },
  {
    id: 17,
    name: "New Year's Eve",
    date: getNextNewYearsEveDate(),
    description: "New Year's Eve is a day to celebrate the end of the year",
  },
  {
    id: 26,
    date: getNextMemorialDate(),
    name: 'Memorial Day',
    description:
      'Memorial Day is a day to honor those who have died in military service',
  },
  {
    id: 37,
    name: 'Your Birthday',
    date: yourBirthdayDate(),
    description:
      'Your Birthday is a day to celebrate you making another orbit around the sun!',
  },
  {
    id: 38,
    name: 'Last Day of School',
    date: lastDayOfSchoolDate(),
    description:
      'Last Day of School is a day to celebrate the end of the school year and the beginning of summer break',
  },
  {
    id: 41,
    date: getInaugurationDate(),
    name: 'Inauguration Day',
    description:
      'Inauguration Day is a day to celebrate the inauguration of the President of the United States',
  },
  {
    id: 43,
    date: getNextGoodFridayDate(),
    name: 'Good Friday',
    description:
      'Good Friday is a day to commemorate the crucifixion of Jesus Christ and his death at Calvary',
  },
  {
    id: 44,
    date: getAprilFoolsDate(),
    name: 'April Fools Day',
    description: 'April Fools Day is a day to play pranks on people',
  },
];
export default HoliData;

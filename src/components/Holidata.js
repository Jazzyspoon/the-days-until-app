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
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Mexico_City_New_Years_2013%21_%288333128248%29.jpg/1920px-Mexico_City_New_Years_2013%21_%288333128248%29.jpg',
    description:
      "In the Gregorian calendar, New Year's Day is the first day of the year; 1 January. Whilst most solar calendars (like the Gregorian and Julian) begin the year regularly at or near the northern winter solstice, cultures that observe a lunisolar or lunar calendar celebrate their Lunar New Year at less fixed points relative to the solar year.",
  },
  {
    id: 2,
    date: getCurrentUpcomingMLKDate(),
    name: 'Martin Luther King, Jr. Day',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Martin_Luther_King_press_conference_01269u_edit.jpg/1024px-Martin_Luther_King_press_conference_01269u_edit.jpg',
    description:
      "Martin Luther King Jr. Day is a federal holiday in the United States marking the birthday of Martin Luther King Jr. It is observed on the third Monday of January each year. Born in 1929, King's actual birthday is January 15. The holiday is similar to holidays set under the Uniform Monday Holiday Act. ",
  },
  {
    id: 3,
    date: getValentinesDayDate(),
    name: 'Valentines Day',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Antique_Valentine_1909_01.jpg/800px-Antique_Valentine_1909_01.jpg',
    description:
      "Valentine's Day, also called Saint Valentine's Day or the Feast of Saint Valentine, is celebrated annually on February 14. It originated as a Christian feast day honoring a martyr named Valentine and through later folk traditions, it has also become a significant cultural, religious and commercial celebration of romance and love in many regions of the world",
  },
  {
    id: 4,
    date: getNextPresidentsDate(),
    name: 'Presidents Day',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/1024px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg',
    description:
      "Presidents' Day, officially Washington's Birthday at the federal governmental level, is a holiday in the United States celebrated on the third Monday of February. It is often celebrated to honor all those who served as presidents of the United States and, since 1879, has been the federal holiday honoring Founding Father George Washington, who led the Continental Army to victory in the American Revolutionary War, presided at the Constitutional Convention of 1787, and was the first U.S. president.",
  },
  {
    id: 8,
    date: getJuneteenthDate(),
    name: 'Juneteenth',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Juneteenth_festival_in_Milwaukee%2C_2019.jpg/1920px-Juneteenth_festival_in_Milwaukee%2C_2019.jpg',
    description:
      'Juneteenth (officially Juneteenth National Independence Day) is a federal holiday in the United States commemorating the end of slavery. Its name is a portmanteau of "June" and "nineteenth", as it is celebrated on the anniversary of June 19, 1865, when in the wake of the American Civil War, Major General Gordon Granger ordered the final enforcement of the Emancipation Proclamation in Texas. Originating in Galveston, Juneteenth has since been observed annually in various parts of the United States, often broadly celebrating African-American culture.',
  },
  {
    id: 9,
    date: getNextFourthOfJulyDate(),
    name: '4th of July',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Fourth_of_July_fireworks_behind_the_Washington_Monument%2C_1986.jpg/1024px-Fourth_of_July_fireworks_behind_the_Washington_Monument%2C_1986.jpg',
    description:
      'Independence Day, known colloquially as the Fourth of July, is a federal holiday in the United States commemorating the Declaration of Independence, which was ratified by the Second Continental Congress on July 4, 1776, establishing the United States of America.',
  },
  {
    id: 10,
    date: getLaborDayDate(),
    name: 'Labor Day',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/First_United_States_Labor_Day_Parade%2C_September_5%2C_1882_in_New_York_City.jpg/1920px-First_United_States_Labor_Day_Parade%2C_September_5%2C_1882_in_New_York_City.jpg',
    description:
      'Labor Day is a federal holiday in the United States celebrated on the first Monday in September to honor and recognize the American labor movement and the works and contributions of laborers to the development and achievements of the United States.',
  },
  {
    id: 12,
    date: getVeteransDayDate(),
    name: 'Veterans Day',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/World_War_I_veteran_Joseph_Ambrose%2C_86%2C_at_the_dedication_day_parade_for_the_Vietnam_Veterans_Memorial_in_1982.jpg/1024px-World_War_I_veteran_Joseph_Ambrose%2C_86%2C_at_the_dedication_day_parade_for_the_Vietnam_Veterans_Memorial_in_1982.jpg',
    description:
      'Veterans Day (originally known as Armistice Day) is a federal holiday in the United States observed annually on November 11, for honoring military veterans of the United States Armed Forces (who were discharged under conditions other than dishonorable). It coincides with other holidays including Armistice Day and Remembrance Day which are commemorated in other countries that mark the anniversary of the end of World War I. Major hostilities of World War I were formally ended at the 11th hour of the 11th day of the 11th month of 1918 when the Armistice with Germany went into effect. At the urging of major U.S. veteran organizations, Armistice Day was renamed Veterans Day in 1954.',
  },
  {
    id: 13,
    date: getNextThanksgivingDate(),
    name: 'Thanksgiving Day',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Our_%28Almost_Traditional%29_Thanksgiving_Dinner.jpg/1920px-Our_%28Almost_Traditional%29_Thanksgiving_Dinner.jpg',
    description:
      'Thanksgiving is a national holiday celebrated on various dates in the United States, Canada, Grenada, Saint Lucia, Liberia, and unofficially in countries like Brazil and the Philippines. It is also observed in the Dutch town of Leiden and the Australian territory of Norfolk Island. It began as a day of giving thanks for the blessings of the harvest and of the preceding year (Similarly named harvest festival holidays occur throughout the world during autumn, including in Germany and Japan.). Thanksgiving is celebrated on the second Monday of October in Canada and on the fourth Thursday of November in the United States and around the same part of the year in other places. Although Thanksgiving has historical roots in religious and cultural traditions, it has long been celebrated as a secular holiday as well.',
  },
  {
    id: 14,
    date: getNextChristmasDate(),
    name: 'Christmas Day',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/NativityChristmasLights2.jpg/1920px-NativityChristmasLights2.jpg',
    description:
      'Christmas is an annual festival commemorating the birth of Jesus Christ, observed primarily on December 25 as a religious and cultural celebration among billions of people around the world. A feast central to the Christian liturgical year, it is preceded by the season of Advent or the Nativity Fast and initiates the season of Christmastide, which historically in the West lasts twelve days and culminates on Twelfth Night. Christmas Day is a public holiday in many countries, is celebrated religiously by a majority of Christians, as well as culturally by many non-Christians, and forms an integral part of the holiday season organized around it.',
  },
  {
    id: 15,
    name: 'Easter',
    date: getNextEasterDate(),
    image:
      'https://upload.wikimedia.org/wikipedia/commons/b/b2/Resurrection_%2824%29.jpg',
    description:
      'Easter, also called Pascha (Aramaic, Greek, Latin) or Resurrection Sunday, is a Christian festival and cultural holiday commemorating the resurrection of Jesus from the dead, described in the New Testament as having occurred on the third day of his burial following his crucifixion by the Romans at Calvary c. 30 AD. It is the culmination of the Passion of Jesus Christ, preceded by Lent (or Great Lent), a 40-day period of fasting, prayer, and penance.',
  },
  {
    id: 16,
    name: 'Halloween',
    date: getNextHalloweenDate(),
    image:
      'https://upload.wikimedia.org/wikipedia/commons/a/a2/Jack-o%27-Lantern_2003-10-31.jpg',
    description:
      "Halloween or Hallowe'en (less commonly known as Allhalloween, All Hallows' Eve, or All Saints' Eve) is a celebration observed in many countries on 31 October, the eve of the Western Christian feast of All Saints' Day. It begins the observance of Allhallowtide, the time in the liturgical year dedicated to remembering the dead, including saints (hallows), martyrs, and all the faithful departed.",
  },
  {
    id: 17,
    name: "New Year's Eve",
    date: getNextNewYearsEveDate(),
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Fanciful_sketch_by_Marguerite_Martyn_of_a_New_Years_Eve_celebration.jpg/1920px-Fanciful_sketch_by_Marguerite_Martyn_of_a_New_Years_Eve_celebration.jpg',
    description:
      "In the Gregorian calendar, New Year's Eve, also known as Old Year's Day or Saint Sylvester's Day in many countries, is the evening or the entire day of the last day of the year, 31 December. The last day of the year is commonly referred to as “New Year's Eve”. In many countries, New Year's Eve is celebrated with dancing, eating, drinking, and watching or lighting fireworks. Some Christians attend a watchnight service. The celebrations generally go on past midnight into New Year's Day, 1 January.",
  },
  {
    id: 26,
    date: getNextMemorialDate(),
    name: 'Memorial Day',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Graves_at_Arlington_on_Memorial_Day.JPG/1024px-Graves_at_Arlington_on_Memorial_Day.JPG',
    description:
      'Memorial Day (originally known as Decoration Day) is a federal holiday in the United States for honoring and mourning the U.S. military personnel who died while serving in the United States Armed Forces. From 1868 to 1970, it was observed on May 30. Since 1971, it is observed on the last Monday of May.',
  },
  {
    id: 37,
    name: 'Your Birthday',
    date: yourBirthdayDate(),
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/For%C3%AAt-noire_-_2.jpg/1920px-For%C3%AAt-noire_-_2.jpg',
    description:
      'A birthday is the anniversary of the birth of a person, or figuratively of an institution. Birthdays of people are celebrated in numerous cultures, often with birthday gifts, birthday cards, a birthday party, or a rite of passage.',
  },
  {
    id: 38,
    name: 'Last Day of School',
    date: lastDayOfSchoolDate(),
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Alpine_School_District_school_bus.JPG/1920px-Alpine_School_District_school_bus.JPG',
    description:
      'Last Day of School is a day to celebrate the end of the school year and the beginning of summer break',
  },
  {
    id: 41,
    date: getInaugurationDate(),
    name: 'Inauguration Day',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/e/e3/Jfk_inauguration.jpg',
    description:
      'In government and politics, inauguration is the process of swearing a person into office and thus making that person the incumbent. Such an inauguration commonly occurs through a formal ceremony or special event, which may also include an inaugural address by the new official. The word inauguration stems from the Latin augur, which refers to the rituals of ancient Roman priests seeking to interpret if it was the will of the gods for a public official to be deemed worthy to assume office.',
  },
  {
    id: 43,
    date: getNextGoodFridayDate(),
    name: 'Good Friday',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/3/33/W%C3%BCger_Kreuzigung.jpg',
    description:
      'Good Friday is a Christian holiday commemorating the crucifixion of Jesus and his death at Calvary. It is observed during Holy Week as part of the Paschal Triduum. It is also known as Holy Friday, Great Friday, Great and Holy Friday (also Holy and Great Friday), and Black Friday.',
  },
  {
    id: 44,
    date: getAprilFoolsDate(),
    name: 'April Fools Day',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Aprilsnar_2001.png',
    description:
      "April Fools' Day or All Fools' Day is an annual custom on 1 April consisting of practical jokes and hoaxes. Jokesters often expose their actions by shouting 'April Fools!' at the recipient. Mass media can be involved with these pranks, which may be revealed as such the following day. The custom of setting aside a day for playing harmless pranks upon one's neighbour has been relatively common in the world historically.",
  },
];
export default HoliData;

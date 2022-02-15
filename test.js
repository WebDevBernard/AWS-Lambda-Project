// <========= START OF REQUIRED CHANGES =========>
// REQUIRED change the expansion with this variable
const expansion = "sl";
// REQUIRED change season with this variable
const season = "2";
// REQUIRED  change affixes with this array
const schedule = [
  "Fortified-Bursting-Storming-Tormented",
  "Tyrannical-Raging-Volcanic-Tormented",
  "Fortified-Inspiring-Grievous-Tormented",
  "Tyrannical-Spiteful-Necrotic-Tormented",
  "Fortified-Bolstering-Quaking-Tormented",
  "Tyrannical-Sanguine-Storming-Tormented",
  "Fortified-Raging-Explosive-Tormented",
  "Tyrannical-Bursting-Volcanic-Tormented",
  "Fortified-Spiteful-Grievous-Tormented",
  "Tyrannical-Inspiring-Quaking-Tormented",
  "Fortified-Sanguine-Necrotic-Tormented",
  "Tyrannical-Bolstering-Explosive-Tormented",
];
//  REQUIRED change the starting date
const startDate = "July 6, 2021";
//  OPTIONAL change the day of the week this function is called
const apiCallDate = 4; // 8=mon, 7=tues, 6=wed, 5=thurs, 4=fri 12:00pst
// <========= END OF REQUIRED CHANGES =========>

// Converts start date to week format (eg. week 1 = 1)
const getStartDate = new Date(startDate);
const getCurrentDate = new Date();
const utcDate = new Date(getCurrentDate.toUTCString());
utcDate.setHours(utcDate.getHours() - 8);
const formatPstDate = new Date(utcDate);
const formatDate = 1000 * 60 * 60 * 24;
const diff = Math.floor((formatPstDate - getStartDate) / formatDate);
const findCurrentWeek = () => Math.round((diff + apiCallDate) / 7);
const currentWeek = findCurrentWeek();

// find schedule that corresponds to the current week  (up to 60 weeks)
const matchWeekWithRotation = (start, end) => {
  return (currentWeek - start) * (currentWeek - end) <= 0;
};
const findIndex = () => {
  let index = 0;
  for (const element of schedule) {
    if (matchWeekWithRotation(1, 12)) {
      index = currentWeek;
    }
    if (matchWeekWithRotation(13, 24)) {
      index = currentWeek - 12;
    }
    if (matchWeekWithRotation(25, 36)) {
      index = currentWeek - 24;
    }
    if (matchWeekWithRotation(37, 48)) {
      index = currentWeek - 36;
    }
    if (matchWeekWithRotation(49, 60)) {
      index = currentWeek - 48;
    }

    return index;
  }
};

const foundIndex = findIndex();

const url = `https://raider.io/api/mythic-plus/rankings/runs?region="world"&season=season-${expansion}-${season}&dungeon=all&strict=false&affixes=${schedule[foundIndex]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;

console.log(foundIndex);
console.log(url);
console.log(currentWeek);
console.log(matchWeekWithRotation(30, 32));

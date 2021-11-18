const startDate = "July 6, 2021";
const getStartDate = new Date(startDate);
const getCurrentDate = new Date();
const utcDate = new Date(getCurrentDate.toUTCString());
utcDate.setHours(utcDate.getHours() - 8);
const formatPstDate = new Date(utcDate);
const formatDate = 1000 * 60 * 60 * 24;
const diff = Math.floor((formatPstDate - getStartDate) / formatDate);

const findCurrentCycle = async () => {
  let numberOfCycles = 1;
  if (diff >= 420) {
    return (numberOfCycles = 6);
  }
  if (diff >= 336) {
    return (numberOfCycles = 5);
  }
  if (diff >= 252) {
    return (numberOfCycles = 4);
  }
  if (diff >= 168) {
    return (numberOfCycles = 3);
  }
  if (diff >= 84) {
    return (numberOfCycles = 2);
  }
  return numberOfCycles;
};
console.log(diff);
console.log(formatPstDate);

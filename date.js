const startDate = "Jan 6, 2021";
const dateStart = new Date(startDate);
const dateCurr = new Date();
const dateDay = 1000 * 60 * 60 * 24;
const diff = Math.floor((dateCurr - dateStart) / dateDay);

const incrementTime = () => {
  let cycle = 1;
  if (diff >= 420) {
    return (cycle = 6);
  }
  if (diff >= 336) {
    return (cycle = 5);
  }
  if (diff >= 252) {
    return (cycle = 4);
  }
  if (diff >= 168) {
    return (cycle = 3);
  }
  if (diff >= 84) {
    return (cycle = 2);
  }
  return cycle;
};
console.log(incrementTime());

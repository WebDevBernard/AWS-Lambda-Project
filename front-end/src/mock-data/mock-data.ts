const schedule = [
  "Fortified, Bursting, Storming, Encrypted",
  "Tyrannical, Raging, Volcanic, Encrypted",
  "Fortified, Inspiring, Grievous, Encrypted",
  "Tyrannical, Spiteful, Necrotic, Encrypted",
  "Fortified, Bolstering, Quaking, Encrypted",
  "Tyrannical, Sanguine, Storming, Encrypted",
  "Fortified, Raging, Explosive, Encrypted",
  "Tyrannical, Bursting, Volcanic, Encrypted",
  "Fortified, Spiteful, Grievous, Encrypted",
  "Tyrannical, Inspiring, Quaking, Encrypted",
  "Fortified, Sanguine, Grievous, Encrypted",
  "Tyrannical, Bolstering, Explosive, Encrypted",
];

schedule.forEach((el, i) => (schedule[i] = el.replace(/, /g, "-")));

const mockNumber = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};
const firstTotal = Array.from({ length: 12 }, () =>
  mockNumber(700000, 1000000)
);
const secondTotal = Array.from({ length: 12 }, () =>
  mockNumber(200000, 300000)
);

export const mockData = [
  {
    date: "2022-03-11T13:55:52PST",
    week: 1,
    season: 3,
    affix: schedule[0],
    expansion: "sl",
    total: firstTotal[0],
  },
  {
    date: "2022-03-11T13:55:52PST",
    week: 2,
    season: 3,
    affix: schedule[1],
    expansion: "sl",
    total: firstTotal[1],
  },
  {
    date: "2022-03-11T13:55:52PST",
    week: 3,
    season: 3,
    affix: schedule[2],
    expansion: "sl",
    total: firstTotal[2],
  },
  {
    date: "2022-03-11T13:55:52PST",
    week: 4,
    season: 3,
    affix: schedule[3],
    expansion: "sl",
    total: firstTotal[3],
  },
  {
    date: "2022-03-11T13:55:52PST",
    week: 5,
    season: 3,
    affix: schedule[4],
    expansion: "sl",
    total: firstTotal[4],
  },
  {
    date: "2022-03-11T13:55:52PST",
    week: 6,
    season: 3,
    affix: schedule[5],
    expansion: "sl",
    total: firstTotal[5],
  },
  {
    date: "2022-03-11T13:55:52PST",
    week: 7,
    season: 3,
    affix: schedule[6],
    expansion: "sl",
    total: firstTotal[6],
  },
  {
    date: "2022-03-11T13:55:52PST",
    week: 8,
    season: 3,
    affix: schedule[7],
    expansion: "sl",
    total: firstTotal[7],
  },
  {
    date: "2022-03-11T13:55:52PST",
    week: 9,
    season: 3,
    affix: schedule[8],
    expansion: "sl",
    total: firstTotal[8],
  },
  {
    date: "2022-03-11T13:55:52PST",
    week: 10,
    season: 3,
    affix: schedule[9],
    expansion: "sl",
    total: firstTotal[9],
  },
  {
    date: "2022-03-11T13:55:52PST",
    week: 11,
    season: 3,
    affix: schedule[10],
    expansion: "sl",
    total: firstTotal[10],
  },

  {
    date: "2022-03-11T13:55:52PST",
    week: 12,
    season: 3,
    affix: schedule[11],
    expansion: "sl",
    total: firstTotal[11],
  },
  {
    date: "2022-03-11T13:55:52PST",
    week: 13,
    season: 3,
    affix: schedule[0],
    expansion: "sl",
    total: firstTotal[0] + secondTotal[0],
  },
  {
    date: "2022-03-11T13:55:52PST",
    week: 14,
    season: 3,
    affix: schedule[1],
    expansion: "sl",
    total: firstTotal[1] + secondTotal[1],
  },
  {
    date: "2022-03-11T13:55:52PST",
    week: 15,
    season: 3,
    affix: schedule[2],
    expansion: "sl",
    total: firstTotal[2] + secondTotal[2],
  },
  {
    date: "2022-03-11T13:55:52PST",
    week: 16,
    season: 3,
    affix: schedule[3],
    expansion: "sl",
    total: firstTotal[3] + secondTotal[3],
  },
  {
    date: "2022-03-11T13:55:52PST",
    week: 17,
    season: 3,
    affix: schedule[4],
    expansion: "sl",
    total: firstTotal[4] + secondTotal[4],
  },
  {
    date: "2022-03-11T13:55:52PST",
    week: 18,
    season: 3,
    affix: schedule[5],
    expansion: "sl",
    total: firstTotal[5] + secondTotal[5],
  },
  {
    date: "2022-03-11T13:55:52PST",
    week: 19,
    season: 3,
    affix: schedule[6],
    expansion: "sl",
    total: firstTotal[6] + secondTotal[6],
  },
  {
    date: "2022-03-11T13:55:52PST",
    week: 20,
    season: 3,
    affix: schedule[7],
    expansion: "sl",
    total: firstTotal[7] + secondTotal[7],
  },
  {
    date: "2022-03-11T13:55:52PST",
    week: 21,
    season: 3,
    affix: schedule[8],
    expansion: "sl",
    total: firstTotal[8] + secondTotal[8],
  },
  {
    date: "2022-03-11T13:55:52PST",
    week: 22,
    season: 3,
    affix: schedule[9],
    expansion: "sl",
    total: firstTotal[9] + secondTotal[9],
  },
  {
    date: "2022-03-11T13:55:52PST",
    week: 23,
    season: 3,
    affix: schedule[10],
    expansion: "sl",
    total: firstTotal[10] + secondTotal[10],
  },

  {
    date: "2022-03-11T13:55:52PST",
    week: 24,
    season: 3,
    affix: schedule[11],
    expansion: "sl",
    total: firstTotal[11] + secondTotal[11],
  },
];

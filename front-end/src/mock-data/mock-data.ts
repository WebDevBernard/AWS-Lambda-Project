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

const mockNumber = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};
const firstTotal = Array.from({ length: 12 }, () =>
  mockNumber(700000, 1000000)
);
const secondTotal = Array.from({ length: 12 }, () =>
  mockNumber(100000, 200000)
);

const thirdTotal = Array.from({ length: 12 }, () => mockNumber(10000, 20000));
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
  {
    date: "2022-03-11T13:55:52PST",
    week: 25,
    season: 3,
    affix: schedule[0],
    expansion: "sl",
    total: firstTotal[0] + secondTotal[0] + thirdTotal[0],
  },
  {
    date: "2022-03-11T13:55:52PST",
    week: 26,
    season: 3,
    affix: schedule[1],
    expansion: "sl",
    total: firstTotal[1] + secondTotal[1] + thirdTotal[1],
  },
  {
    date: "2022-03-11T13:55:52PST",
    week: 27,
    season: 3,
    affix: schedule[2],
    expansion: "sl",
    total: firstTotal[2] + secondTotal[2] + thirdTotal[2],
  },
  {
    date: "2022-03-11T13:55:52PST",
    week: 28,
    season: 3,
    affix: schedule[3],
    expansion: "sl",
    total: firstTotal[3] + secondTotal[3] + thirdTotal[3],
  },
  {
    date: "2022-03-11T13:55:52PST",
    week: 29,
    season: 3,
    affix: schedule[4],
    expansion: "sl",
    total: firstTotal[4] + secondTotal[4] + thirdTotal[4],
  },
  {
    date: "2022-03-11T13:55:52PST",
    week: 30,
    season: 3,
    affix: schedule[5],
    expansion: "sl",
    total: firstTotal[5] + secondTotal[5] + thirdTotal[5],
  },
  {
    date: "2022-03-11T13:55:52PST",
    week: 31,
    season: 3,
    affix: schedule[6],
    expansion: "sl",
    total: firstTotal[6] + secondTotal[6] + thirdTotal[6],
  },
  {
    date: "2022-03-11T13:55:52PST",
    week: 32,
    season: 3,
    affix: schedule[7],
    expansion: "sl",
    total: firstTotal[7] + secondTotal[7] + thirdTotal[7],
  },
  {
    date: "2022-03-11T13:55:52PST",
    week: 33,
    season: 3,
    affix: schedule[8],
    expansion: "sl",
    total: firstTotal[8] + secondTotal[8] + thirdTotal[8],
  },
  {
    date: "2022-03-11T13:55:52PST",
    week: 34,
    season: 3,
    affix: schedule[9],
    expansion: "sl",
    total: firstTotal[9] + secondTotal[9] + thirdTotal[9],
  },
  {
    date: "2022-03-11T13:55:52PST",
    week: 35,
    season: 3,
    affix: schedule[10],
    expansion: "sl",
    total: firstTotal[10] + secondTotal[10] + thirdTotal[10],
  },

  {
    date: "2022-03-11T13:55:52PST",
    week: 36,
    season: 3,
    affix: schedule[11],
    expansion: "sl",
    total: firstTotal[11] + secondTotal[11] + thirdTotal[11],
  },
];

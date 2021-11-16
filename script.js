import fetch from "node-fetch";

// Requests to this API are limited to 300 requests per minute
// https://raider.io/api#/mythic_plus/getApiV1MythicplusAffixes
// https://raider.io/api/mythic-plus/rankings/runs?region=world&season=season-sl-1&dungeon=all&strict=false&affixes=tyrannical-inspiring-necrotic-prideful&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false
// https://www.reddit.com/r/wow/comments/o5nocw/comment/h2ov91n/?utm_source=share&utm_medium=web2x&context=3

// Season 2 starts July 6
// 1	Fortified-Bursting-Storming-Tormented
// 2	Tyrannical-Raging-Volcanic-Tormented
// 3	Fortified-Inspiring-Grievous-Tormented
// 4	Tyrannical-Spiteful-Necrotic-Tormented
// 5	Fortified-Bolstering-Quaking-Tormented
// 6	Tyrannical-Sanguine-Storming-Tormented
// 7	Fortified-Raging-Explosive-Tormented
// 8	Tyrannical-Bursting-Volcanic-Tormented
// 9	Fortified-Spiteful-Grievous-Tormented
// 10	Tyrannical-Inspiring	Quaking	Tormented
// 11	Fortified-Sanguine-Necrotic-Tormented
// 12	Tyrannical-Bolstering-Explosive-Tormented

// change schedule with this array
const schedule = [
  "Fortified-Bursting-Storming",
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

const url1 = `https://raider.io/api/mythic-plus/rankings/runs?region=world&season=season-sl-2&dungeon=all&strict=false&affixes=${schedule[0]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
const url2 = `https://raider.io/api/mythic-plus/rankings/runs?region=world&season=season-sl-2&dungeon=all&strict=false&affixes=${schedule[1]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
const url3 = `https://raider.io/api/mythic-plus/rankings/runs?region=world&season=season-sl-2&dungeon=all&strict=false&affixes=${schedule[2]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
const url4 = `https://raider.io/api/mythic-plus/rankings/runs?region=world&season=season-sl-2&dungeon=all&strict=false&affixes=${schedule[3]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
const url5 = `https://raider.io/api/mythic-plus/rankings/runs?region=world&season=season-sl-2&dungeon=all&strict=false&affixes=${schedule[4]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
const url6 = `https://raider.io/api/mythic-plus/rankings/runs?region=world&season=season-sl-2&dungeon=all&strict=false&affixes=${schedule[5]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
const url7 = `https://raider.io/api/mythic-plus/rankings/runs?region=world&season=season-sl-2&dungeon=all&strict=false&affixes=${schedule[6]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
const url8 = `https://raider.io/api/mythic-plus/rankings/runs?region=world&season=season-sl-2&dungeon=all&strict=false&affixes=${schedule[7]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
const url9 = `https://raider.io/api/mythic-plus/rankings/runs?region=world&season=season-sl-2&dungeon=all&strict=false&affixes=${schedule[8]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
const url10 = `https://raider.io/api/mythic-plus/rankings/runs?region=world&season=season-sl-2&dungeon=all&strict=false&affixes=${schedule[9]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
const url11 = `https://raider.io/api/mythic-plus/rankings/runs?region=world&season=season-sl-2&dungeon=all&strict=false&affixes=${schedule[10]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
const url12 = `https://raider.io/api/mythic-plus/rankings/runs?region=world&season=season-sl-2&dungeon=all&strict=false&affixes=${schedule[11]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;

const fetchData = async () => {
  try {
    const response = await Promise.all([
      fetch(url1),
      fetch(url2),
      fetch(url3),
      fetch(url4),
      fetch(url5),
      fetch(url6),
      fetch(url7),
      fetch(url8),
      fetch(url9),
      fetch(url10),
      fetch(url11),
      fetch(url12),
    ]);
    const jsonData = response.map((res) => res.json());
    const promiseData = await Promise.all(jsonData);
    return promiseData;
  } catch (err) {
    console.log(err);
  }
};

const organizeData = async () => {
  const data = await fetchData();
  // console.log(data);
  let obj = {};
  for (let i = 0; i < data.length; i++) {
    obj[`Week ${i + 1}`] = data[i].rankings.ui.lastPage * 20;
  }
  return obj;
};

const printData = async () => {
  const giveMeData = await organizeData();
  console.log(giveMeData);
};

printData();

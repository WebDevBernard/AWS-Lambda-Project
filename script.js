import fetch from "node-fetch";
// API Documentation (Requests to this API are limited to 300 requests per minute): https://raider.io/api#/mythic_plus/getApiV1MythicplusAffixes
// Example of API request: https://raider.io/api/mythic-plus/rankings/runs?region=world&season=season-sl-1&dungeon=all&strict=false&affixes=tyrannical-inspiring-necrotic-prideful&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false
// How this script works: https://www.reddit.com/r/wow/comments/o5nocw/comment/h2ov91n/?utm_source=share&utm_medium=web2x&context=3
// Mythic+ Season 2 started on July 6th, 2021

// change season with this variable
const season = "2";
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
// change region with this variable. Available values : us, eu, tw, kr, cn
const region = "world";

// change this only if you need to modify a hardcoded parameter
const week1 = `https://raider.io/api/mythic-plus/rankings/runs?region=${region}&season=season-sl-${season}&dungeon=all&strict=false&affixes=${schedule[0]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
const week2 = `https://raider.io/api/mythic-plus/rankings/runs?region=${region}&season=season-sl-${season}&dungeon=all&strict=false&affixes=${schedule[1]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
const week3 = `https://raider.io/api/mythic-plus/rankings/runs?region=${region}&season=season-sl-${season}&dungeon=all&strict=false&affixes=${schedule[2]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
const week4 = `https://raider.io/api/mythic-plus/rankings/runs?region=${region}&season=season-sl-${season}&dungeon=all&strict=false&affixes=${schedule[3]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
const week5 = `https://raider.io/api/mythic-plus/rankings/runs?region=${region}&season=season-sl-${season}&dungeon=all&strict=false&affixes=${schedule[4]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
const week6 = `https://raider.io/api/mythic-plus/rankings/runs?region=${region}&season=season-sl-${season}&dungeon=all&strict=false&affixes=${schedule[5]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
const week7 = `https://raider.io/api/mythic-plus/rankings/runs?region=${region}&season=season-sl-${season}&dungeon=all&strict=false&affixes=${schedule[6]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
const week8 = `https://raider.io/api/mythic-plus/rankings/runs?region=${region}&season=season-sl-${season}&dungeon=all&strict=false&affixes=${schedule[7]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
const week9 = `https://raider.io/api/mythic-plus/rankings/runs?region=${region}&season=season-sl-${season}&dungeon=all&strict=false&affixes=${schedule[8]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
const week10 = `https://raider.io/api/mythic-plus/rankings/runs?region=${region}&season=season-sl-${season}&dungeon=all&strict=false&affixes=${schedule[9]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
const week11 = `https://raider.io/api/mythic-plus/rankings/runs?region=${region}&season=season-sl-${season}&dungeon=all&strict=false&affixes=${schedule[10]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
const week12 = `https://raider.io/api/mythic-plus/rankings/runs?region=${region}&season=season-sl-${season}&dungeon=all&strict=false&affixes=${schedule[11]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;

const fetchData = async () => {
  try {
    const response = await Promise.all([
      fetch(week1),
      fetch(week2),
      fetch(week3),
      fetch(week4),
      fetch(week5),
      fetch(week6),
      fetch(week7),
      fetch(week8),
      fetch(week9),
      fetch(week10),
      fetch(week11),
      fetch(week12),
    ]);
    const jsonData = response.map((res) => res.json());
    const promiseData = await Promise.all(jsonData);
    return promiseData;
  } catch (err) {
    console.log("Could Not Return Request:", err);
  }
};

const organizeData = async () => {
  const data = await fetchData();
  let obj = {};
  for (let i = 0; i < data.length; i++) {
    // There are 20 rankings per page, lastPage = number of pages. Therefore 20 * lastPage = total number of characters
    obj[`Week${i + 1}`] = data[i].rankings.ui.lastPage * 20;
  }
  return obj;
};

const getDate = new Date();
const readableDate = getDate.toISOString().slice(0, 10).replace(/-/g, "/");

const printData = async () => {
  const data = await organizeData();
  console.log(readableDate, ":", data);
};

printData();

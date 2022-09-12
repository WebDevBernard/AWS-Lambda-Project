const AWS = require("aws-sdk");
const db = new AWS.DynamoDB.DocumentClient({ region: "us-east-2" });
const axios = require("axios").default;

exports.handler = (event, context, callback) => {
  //

  // <========= START OF REQUIRED CHANGES =========>
  // REQUIRED change the expansion with this variable
  const expansion = "sl";
  // REQUIRED change season with this variable
  const season = "4";
  // REQUIRED  change affixes with this array
  const schedule = [
    "Tyrannical, Inspiring, Quaking, Shrouded",
    "Fortified, Sanguine, Grievous, Shrouded",
    "Tyrannical, Bolstering, Explosive, Shrouded",
    "Fortified, Bursting, Storming, Shrouded",
    "Tyrannical, Raging, Volcanic, Shrouded",
    "Fortified, Inspiring, Grievous, Shrouded",
    "Tyrannical, Spiteful, Necrotic, Shrouded",
    "Fortified, Bolstering, Quaking, Shrouded",
    "Tyrannical, Sanguine, Storming, Shrouded",
    "Fortified, Raging, Explosive, Shrouded",
    "Tyrannical, Bursting, Volcanic, Shrouded",
    "Fortified, Spiteful, Necrotic, Shrouded",
  ];
  const startDate = "August 2, 2022";
  //  REQUIRED change the starting date
  // <========= END OF REQUIRED CHANGES =========>

  // <========= START OF OPTIONAL CHANGES =========>
  //  OPTIONAL change the day of the week this function is called
  //  Calls previous weeks affix
  const apiCallDate = -3; // 1=mon, 0=tues, -1=wed, -2=thurs, -3=fri 12:00pst

  const pageCount = 20;
  // <========= END OF OPTIONAL CHANGES =========>

  // Changes start date to week format
  const getStartDate = new Date(startDate);
  const getCurrentDate = new Date();
  const utcDate = new Date(getCurrentDate.toUTCString());
  utcDate.setHours(utcDate.getHours() - 8);
  const formatPstDate = new Date(utcDate);
  const formatDate = 1000 * 60 * 60 * 24;

  // finds the current week from start date
  const diff = Math.floor((formatPstDate - getStartDate) / formatDate);
  const findCurrentWeek = () => Math.round((diff + apiCallDate) / 7);
  const currentWeek = findCurrentWeek();

  // finds the affix that corresponds to the current week
  const foundWeek =
    currentWeek % 12 === 0
      ? 12
      : currentWeek - Math.floor(currentWeek / 12) * 12;
  // changes week to match 0 index array
  const foundIndex = foundWeek - 1;

  // new array and changes ", " to "- "
  const scheduleWithDash = schedule.map((el, i) => el.split(", ").join("-"));

  const url = `https://raider.io/api/mythic-plus/rankings/runs?region=world&season=season-${expansion}-${season}&dungeon=all&strict=false&affixes=${scheduleWithDash[foundIndex]}&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;

  // async fetch data and multiply by pageCount
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      return response.data.rankings.ui.lastPage * pageCount;
    } catch (error) {
      console.log(error);
    }
  };

  const readableDate = formatPstDate.toISOString().slice(0, 19);

  const writeData = async () => {
    const data = await fetchData();
    const params = {
      Item: {
        date: `${readableDate}PST`,
        season: parseInt(season),
        week: currentWeek,
        total: data,
        affix: schedule[foundIndex],
        expansion: expansion,
      },
      TableName: "wow",
    };
    const paramsData = await db.put(params, (err, data) =>
      err ? callback(err, null) : callback(null, JSON.stringify(data))
    );
    console.log(data);
    return paramsData;
  };
  writeData();
};

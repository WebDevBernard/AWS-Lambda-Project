const AWS = require("aws-sdk");
const db = new AWS.DynamoDB.DocumentClient({ region: "us-east-2" });
const axios = require("axios").default;

exports.handler = (event, context, callback) => {
  //

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
  const startDate = "February 15, 2022";
  //  REQUIRED change the starting date
  // <========= END OF REQUIRED CHANGES =========>
  // <========= OPTIONAL CHANGES =========>
  //  OPTIONAL change the day of the week this function is called
  const apiCallDate = 4; // 8=mon, 7=tues, 6=wed, 5=thurs, 4=fri 12:00pst

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
  const weekToCycle = Math.floor(currentWeek / schedule.length);
  // on the 12th week of every cycle, if checks that week 12 returns 12, not 0 (eg. 12 - 1 * 12)
  const foundWeek =
    currentWeek % schedule.length === 0
      ? currentWeek
      : currentWeek - weekToCycle * schedule.length;
  // changes week to match 0 index array
  const foundIndex = foundWeek - 1;

  const url = `https://raider.io/api/mythic-plus/rankings/runs?region="world"&season=season-${expansion}-${season}&dungeon=all&strict=false&affixes=${schedule[foundIndex]}&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;

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

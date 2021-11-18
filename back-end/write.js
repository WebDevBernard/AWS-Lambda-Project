const AWS = require("aws-sdk");
const db = new AWS.DynamoDB.DocumentClient({ region: "us-east-2" });
const axios = require("axios").default;

exports.handler = (event, context, callback) => {
  //

  // <========= START OF REQUIRED CHANGES =========>
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
  const apiCallDate = 6; // 8=mon, 7=tues, 6=wed, 5=thurs, 4=fri 12:00pst
  // <========= END OF REQUIRED CHANGES =========>

  // change this only if you need to modify a hardcoded parameter
  const week1 = `https://raider.io/api/mythic-plus/rankings/runs?region="world"&season=season-sl-${season}&dungeon=all&strict=false&affixes=${schedule[0]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
  const week2 = `https://raider.io/api/mythic-plus/rankings/runs?region="world"&season=season-sl-${season}&dungeon=all&strict=false&affixes=${schedule[1]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
  const week3 = `https://raider.io/api/mythic-plus/rankings/runs?region="world"&season=season-sl-${season}&dungeon=all&strict=false&affixes=${schedule[2]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
  const week4 = `https://raider.io/api/mythic-plus/rankings/runs?region="world"&season=season-sl-${season}&dungeon=all&strict=false&affixes=${schedule[3]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
  const week5 = `https://raider.io/api/mythic-plus/rankings/runs?region="world"&season=season-sl-${season}&dungeon=all&strict=false&affixes=${schedule[4]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
  const week6 = `https://raider.io/api/mythic-plus/rankings/runs?region="world"&season=season-sl-${season}&dungeon=all&strict=false&affixes=${schedule[5]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
  const week7 = `https://raider.io/api/mythic-plus/rankings/runs?region="world"&season=season-sl-${season}&dungeon=all&strict=false&affixes=${schedule[6]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
  const week8 = `https://raider.io/api/mythic-plus/rankings/runs?region="world"&season=season-sl-${season}&dungeon=all&strict=false&affixes=${schedule[7]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
  const week9 = `https://raider.io/api/mythic-plus/rankings/runs?region="world"&season=season-sl-${season}&dungeon=all&strict=false&affixes=${schedule[8]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
  const week10 = `https://raider.io/api/mythic-plus/rankings/runs?region="world"&season=season-sl-${season}&dungeon=all&strict=false&affixes=${schedule[9]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
  const week11 = `https://raider.io/api/mythic-plus/rankings/runs?region="world"&season=season-sl-${season}&dungeon=all&strict=false&affixes=${schedule[10]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;
  const week12 = `https://raider.io/api/mythic-plus/rankings/runs?region="world"&season=season-sl-${season}&dungeon=all&strict=false&affixes=${schedule[11]}&&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`;

  // This function determines which cycle
  const getStartDate = new Date(startDate);
  const getCurrentDate = new Date();
  const utcDate = new Date(getCurrentDate.toUTCString());
  utcDate.setHours(utcDate.getHours() - 8);
  const formatPstDate = new Date(utcDate);
  const formatDate = 1000 * 60 * 60 * 24;
  const diff = Math.floor((formatPstDate - getStartDate) / formatDate);
  const findCurrentCycle = () => (diff + apiCallDate) / 7;

  const fetchData = async () => {
    try {
      const response = await Promise.all([
        axios.get(week1),
        axios.get(week2),
        axios.get(week3),
        axios.get(week4),
        axios.get(week5),
        axios.get(week6),
        axios.get(week7),
        axios.get(week8),
        axios.get(week9),
        axios.get(week10),
        axios.get(week11),
        axios.get(week12),
      ]);
      return response;
    } catch (err) {
      console.log("Axios Error:", err);
    }
  };

  const assignKeyToData = async () => {
    const data = await fetchData();
    let obj = {};
    for (let i = 0; i < data.length; i++) {
      obj[i + 1] = data[i].data.rankings.ui.lastPage * 20;
    }
    return obj;
  };

  // date key
  const readableDate = formatPstDate.toISOString().slice(0, 19);

  const writeData = async () => {
    const data = await assignKeyToData();
    const cycle = await findCurrentCycle();
    const params = {
      Item: {
        date: `${readableDate}PST`,
        season: parseInt(season),
        week: cycle,
        affix: data,
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

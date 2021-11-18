## About

An app that tracks week-to-week player engagement in World of Warcraft (WOW) Mythic +.

- This app is automated using AWS Lambda and CloudWatch events. It only needs to be updated at the start of each season.

### Important

- The data right now is not accurate! I did not start the database until cycle 2 week 8 (week 20 since start of 9.1 Season 2). For this app to work correclty, the data needs to be logged at the start of the season.
- I learned about the RaiderIO API through this Reddit post: [https://www.reddit.com/r/wow/comments/o5nocw/comment/h2ov91n/?utm_source=share&utm_medium=web2x&context=3](https://www.reddit.com/r/wow/comments/o5nocw/comment/h2ov91n/?utm_source=share&utm_medium=web2x&context=3)

### If you've never played WOW, this is what it does:

- In WOW, one popular gameplay mode is the 5 man dungeon. Without going into too much detail, every week there is a different rotation of "affixes" - difficulty modifiers (e.g. bossses have +30% extra health, or mobs have +30% extra damage, and many others).
- Affixes are on a 12 week rotation.
- The API call to RaiderIO queries the different combinations of these affixes to determine how many players have played in TOTAL through out the entire season.
- RaiderIO API returns a key with a "lastPage" count. "lastPage" is the number of pages in the rankings for people who have completed a Mythic+ challenge. Each page has 20 characters listed.
- This app makes an automated call to RaiderIO API every week to get information on the lastPage count and calculates the difference between previous week(s) to get the weekly number of players.
- The information is useful to gauge 1. The number of players over time and 2. Which combination of affixes players like or dislike.

### How does it work?

- CloudWatch schedules AWS Lambda to make a weekly Axios request to Raider.io API
- AWS Lambda writes that data to DynamoDB.
- The file only needs to be updated at the start of the season.

### How to install and run the backend?

- Create a database in DynamoDB and name the table to "wow", and key to "date" (string).
- Copy the entire write.js function into AWS Lambda index.js file.
- Make sure in write.js to update these variables accordingly:

`const season`<br/>
`const schedule`<br/>
`const startDate`<br/>

- Zip the entirety of ./LambdaLayers/DemoLayer and upload it as a zip to your Lambda Layer
- In IAM, attach a policy to enable your Lambda function full access to DynamoDB
- Schedule a CloudWatch event to invoke the function.
- Example of returned JSON data:

```
{
 "date": "2021/11/18T00:39:29",
 "season": "2",
 "days": 135,
 "cycle": 2,
 "weeks": {
  "1": 589720,
  "2": 1562120,
  "3": 1677500,
  "4": 1318340,
  "5": 1225220,
  "6": 1258240,
  "7": 1162180,
  "8": 1395480,
  "9": 794500,
  "10": 671400,
  "11": 549420,
  "12": 574420
 }
}
```

### Other Features that still need to be implemented:

- Front end graph of data collected.

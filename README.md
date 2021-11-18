## About

An app that tracks week-to-week player engagement in World of Warcraft (WOW) Mythic +.

- This app is automated using AWS Lambda and CloudWatch events. It only needs to be updated at the start of each season.
- This data right now is not accurate! I did not start the database until cycle 2 week 8 (week 20 since start of 9.1 Season 2)
- I will update it at the start of the next season to show the correct player data.
- I learned about this API through this Reddit post: [https://www.reddit.com/r/wow/comments/o5nocw/comment/h2ov91n/?utm_source=share&utm_medium=web2x&context=3](https://www.reddit.com/r/wow/comments/o5nocw/comment/h2ov91n/?utm_source=share&utm_medium=web2x&context=3)

### What does it do?

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

### Other Features that still need to be implemented:

- Front end graph of data collected.

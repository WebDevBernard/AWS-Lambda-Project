## Demo

### [View Live Demo](https://mythicplus.vercel.app/)

## Disclaimer

- This data is an estimate of weekly Mythic+ runs based on character count. It uses data from Raider.io API in lieu of an official count from Blizzard. What it does is it looks at the **total number of characters** that have completed a Mythic+ dungeon. This [r/wow](https://www.reddit.com/r/wow/comments/o5nocw/comment/h2ov91n/?utm_source=share&utm_medium=web2x&context=3) post inspired me to make this app.

## Learn more

- If you are wondering how it works or how to make your own chart. It requires calling [Raider.io API](https://raider.io/api) once a week and logging in the data to a database. Basically, the weekly affixes are on a schedule (see table below). It changes every week and repeats itself after 12 weeks. When you call Raider.io API (see example query below) you want to scroll to the bottom and look for this key `data.rankings.ui.lastPage`. With this value, multiply it by 20 (20 because there are 20 characters per page on Raider.io rankings). This will give you a **total character count for a set affixes**. Important to understand: <ins>**This includes all previous weeks that share that set of affix**</ins>. For example, if you wanted to find out the character count for week 13, you would the count recorded on week 1 (both have the same set of affixes). Therefore total on week 13 = week 13 - week 1.

- \*So what does this app do? It automates the API call to Raider.io using AWS Lambda / EventBridge and saves the data with extra info (see repackaged JSON below) to a database. You can read how I wrote my Node.js function in `/back-end/write.js` and my React custom hook in `/front-end/src/hooks/useWowData.tsx`

- Example of Affix schedule:

| Week | Affix(1) +2 | Affix(2) +4 | Affix(3) +7 | Seasonal Affix (10+) |
| ---- | ----------- | ----------- | ----------- | -------------------- |
| 1    | Fortified   | Bursting    | Storming    | Encrypted            |
| 2    | Tyrannical  | Raging      | Volcanic    | Encrypted            |
| 3    | Fortified   | Inspiring   | Grievous    | Encrypted            |
| 4    | Tyrannical  | Spiteful    | Necrotic    | Encrypted            |
| 5    | Fortified   | Bolstering  | Quaking     | Encrypted            |
| 6    | Tyrannical  | Sanguine    | Storming    | Encrypted            |
| 7    | Fortified   | Raging      | Explosive   | Encrypted            |
| 9    | Tyrannical  | Bursting    | Volcanic    | Encrypted            |
| 10   | Fortified   | Spiteful    | Grievous    | Encrypted            |
| 11   | Tyrannical  | Inspiring   | Quaking     | Encrypted            |
| 12   | Fortified   | Sanguine    | Grievous    | Encrypted            |

- Example query to Raider.io API:

`https://raider.io/api/mythic-plus/rankings/runs?region=world&season=season-sl-3&dungeon=all&strict=false&affixes=Fortified-Bursting-Storming-Encrypted&page=0&limit=0&minMythicLevel=0&maxMythicLevel=0&eventId=0&faction=&realm=&period=0&recent=false`

- Example of repackaged JSON file:

```
{
 "date": "2022-03-18T12:00:30PST",
 "week": 2,
 "season": 3,
 "affix": "Fortified-Bursting-Storming-Encrypted",
 "expansion": "sl",
 "total": 1037600
}
```

## Tech Stack

- Front-end built with React and ReCharts
- Back-end built with AWS Lambda, EventBridge, DynamoDB, API Gateway
- Table styled with Material UI

## Preview

!["M+"](https://github.com/WebDevBernard/Portfolio/blob/main/public/docs/raiderio.png)

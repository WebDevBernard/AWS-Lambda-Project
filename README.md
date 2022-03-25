## Demo

### [View Live Demo](https://mythicplus.vercel.app/)

## Disclamer

- Updated recently for Season 3

- This data is not 100% accurate, but it is a good estimate of player count (especially when there is no official count from Blizzard). What it does is it looks at the **total number of characters** that have completed a Mythic+ dungeon. The problem with this is many players often have multiple characters. The data can also continue to update even after the affix has ended for that week. This is why I delay the update until Friday.

## Learn more

- I am a fan of World of Warcraft and this [r/wow](https://www.reddit.com/r/wow/comments/o5nocw/comment/h2ov91n/?utm_source=share&utm_medium=web2x&context=3) post inspired me to make this app.

- If you are wondering how it works or how to make your own chart. It requires calling [Raider.io API](https://raider.io/api) once a week and logging in the data to a database. Basically, the weekly affixes are on a schedule (see table below). Every week it changes and repeats itself after 12 weeks. When you are calling [Raider.io API](https://raider.io/api), you are looking at the **total count for a set affixes**. This includes all previous weeks that share that set of affix. For example, if you wanted to find out the character count for week 13, you would have to know the count on week 1 as well (totalWeek13 = week13 - week1).

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

- \*Read about how I wrote my AWS Lambda function in `/back-end/write.js` and my React custom hook in `/front-end/src/hooks/useWowData.tsx`

## Tech Stack

- Front-end built with React and ReCharts
- Back-end built with AWS Lambda, EventBridge, DynamoDB, API Gateway
- Table styled with Material UI

## Preview

!["M+"](https://github.com/WebDevBernard/Portfolio/blob/main/public/docs/raiderio.png)

### Example of repackaged JSON file:

```
{
 "date": "2022-02-15T13:55:52PST",
 "week": 12,
 "season": 2,
 "affix": "Tyrannical-Bolstering-Explosive-Tormented",
 "expansion": "sl",
 "total": 860060
}
```

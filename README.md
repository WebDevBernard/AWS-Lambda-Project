## Demo

### [View Live Demo](https://mythicplus.vercel.app/)

## About

- A graph of player count in World of Warcraft Mythic+ dungeons. Uses AWS Lambda / Eventbridge to automate calling a different API endpoint depending on a given week.

## Quick Summary

- I am a fan of World of Warcraft and this [r/wow](https://www.reddit.com/r/wow/comments/o5nocw/comment/h2ov91n/?utm_source=share&utm_medium=web2x&context=3) post inspired me to make this app. The main challenge in creating this app is that every week there is a different endpoint to call (12 total). The backend (AWS Lambda) would need to call the correct endpoint, store that data into a database (explanation below why database is needed), and connect that database to my frontend graph. And it would all need to be automated with AWS.

- \*Read about how I wrote my AWS Lambda function in /back-end/write.js and my React custom hook in /front-end/src/hooks/useWowData.tsx

## Long Summary (How it actually works)

- It calls [Raider.io API](https://raider.io/api) for a given set of affixes and returns a page count key / value pair. Page count represents the number of pages in Raider.io's rankings for characters who have completed a Mythic+ dungeon. Each page contains 20 characters, hence page count multiply by 20 equals the total number of characters that have completed a set of affixes. Calling the affix returns a total count for a set of affixes, not total for a given week. For example, to find out how many characters played on week 13, you would have to know the total count for all players that have played that affix. The only other time would be week 1, therefore week 13 would be the count on week 13 minus the count on week 1. You would need to have a database to record all prior weeks.

## Tech Stack

- Front-end built with React and ReCharts
- Back-end built with AWS Lambda, DynamoDB, API Gateway
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

## Instructions for next update:

- At the start of next season, update these constants:
  - AWS Lambda - write.js function: `expansion` `season` `schedule` `startDate`
  - Front-end - App.js: `season`

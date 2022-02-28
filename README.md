## Demo

### [View Live Demo](https://mythicplus.vercel.app/)

## About

- A graph of player count in World of Warcraft Mythic+ dungeons. Uses AWS Lambda/Eventbridge to automate calling a different API path depending on a given week.

- I made this app because I love playing World of Warcraft. When I saw this graph on [r/wow](https://www.reddit.com/r/wow/comments/o5nocw/comment/h2ov91n/?utm_source=share&utm_medium=web2x&context=3), it inspired me to make something like this. Part of the challenge with making this app was that every week I had to call a different API path (total of 12). For example, week 1 would be something like [1, 2, 3, 4], week 2 would be [4, 3, 2, 1], and then a combination of these numbers over 12 weeks. It repeats after week 12, so week 13 would be the same as week 1 (eg. [1, 2, 3, 4]) and so on. So I needed to figure out a way to increment a "week" key, and use that to select the correct path to call. On top of that, I wanted it to be entirely automated using AWS Lambda.

- My approach: I had to create a function that would figure out which week corresponded with which API path (eg. week 1 === [1, 2, 3, 4] path). Initially, I experimented with calling the API for all 12 weeks every week, making 12 API calls at once, even though I only needed 1 week. And on the frontend, I would use the Date object to filter the correct week . Eventually, I would move most of this logic to the backend so it would only need to make 1 API call per week instead of 12.

- Looking back now, one major thing I would have changed would have been spending more time on my backend logic before moving to frontend. The JSON object I initially made was overly complicated and made it really difficult to work with on the frontend.

- \*Read about how I wrote my AWS Lambda function in /back-end/write.js and front-end custom hook in /front-end/src/hooks/useWoWData.ts

- \*More about how this app actually works: Calling Raider.io API returns a page count. Page count represents the number of pages in Raider.io's rankings for characters who have completed a Mythic+ dungeon. Each page contains 20 characters, hence page count multiply by 20 equals the total number of characters that have completed a set of affixes.

## Tech Stack

- Front-end built with React and Chart.js
- Back-end built with AWS Lambda, DynamoDB, API Gateway
- Table styled with Material UI

## Preview

!["M+"](https://github.com/WebDevBernard/Portfolio/blob/main/docs/raiderio.png?raw=true)

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

## Demo

### [View Live Demo](https://mythicplus.vercel.app/)

## About

- An app that displays a graph of player count in World of Warcraft Mythic+ dungeons. It uses automation with AWS Lambda/Eventbridge to call Raider.io API.

- I made this app because I love playing World of Warcraft. When I saw this graph on [r/wow](https://www.reddit.com/r/wow/comments/o5nocw/comment/h2ov91n/?utm_source=share&utm_medium=web2x&context=3), I knew I wanted to make something like this. Part of the challenge of making this app is that the data requires a weekly call to an external API. I knew there had to be a way to automate such a task, and after some research, I decided to go with AWS.

- One major roadblock in creating this app was figuring out how to structure the JSON object so I could use it on the frontend. Initially, I experimented with calling the API for all 12 weeks every week, making 12 API calls at once, even though I only needed one week. And on the frontend, I would use the Date object to filter the correct week. Eventually, I would move most of this logic to the backend so it would only need to make 1 API call per week instead of 12.

- Looking back now, one major thing I would do is not write too much convoluted nonsense code. The JSON object I initially made was overly complicated and made it really difficult to work with on the frontend.

- \*More about how this app works: Calling Raider.io API returns a page count. Page count represents the number of pages in Raider.io's rankings for characters who have completed a Mythic+ dungeon. Each page contains 20 characters, hence page count multiply by 20 equals the total number of characters that have completed a set of affixes.

- \*My business logic for backend is in /back-end/write.js and front-end is in /front-end/src/hooks/useWoWData.ts

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

## Demo

### [View Live Demo](https://mythicplus.vercel.app/)

## About

- An app that displays a graph of player count in World of Warcraft Mythic+ dungeons. It uses automation with AWS Lambda/Eventbridge to call Raider.io API.

- I made this app because I love playing World of Warcraft. When I saw this graph on [r/wow](https://www.reddit.com/r/wow/comments/o5nocw/comment/h2ov91n/?utm_source=share&utm_medium=web2x&context=3), it inspired me to make something like this. Part of the challenge of making this app is that the data requires a weekly call to an external API. I knew there had to be a way to automate such a task, and after some research, I learned it could be done with AWS Lambda.

- One major roadblock in creating this app was figuring out how to structure the JSON object so I could use it on the frontend. I determined that I would have to have a minimum: a current expansion key, a current season key, a current week key, a current affix key. Furthermore, there were 12 different API paths, with each API path corresponded to a given week. For example, week 1 would be [a, 1, 2, c], week 2 would be [b, 2, 4, c], and then it repeats after 12 weeks, week 13 would be the same as week 1 (eg. [a, 1, 2, c]) and so on. So I needed something to increment the week key every week, and select the correct path to call. Initially, I experimented with calling the API for all 12 weeks every week, making 12 API calls at once, even though I only needed 1 week. And on the frontend, I would use the Date object to filter the correct week. Eventually, I would move most of this logic to the backend so it would only need to make 1 API call per week instead of 12.

- Looking back now, one major thing I would do is not write too much convoluted code. The JSON object I initially made was overly complicated and made it really difficult to work with on the frontend.

- \*More about how this app works: Calling Raider.io API returns a page count. Page count represents the number of pages in Raider.io's rankings for characters who have completed a Mythic+ dungeon. Each page contains 20 characters, hence page count multiply by 20 equals the total number of characters that have completed a set of affixes.

- \*Read about how I structured my logic for backend in /back-end/write.js and front-end in /front-end/src/hooks/useWoWData.ts

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

## Demo

### [View Live Demo](https://mythicplus.vercel.app/)

## About

- An app that displays player count in World of Warcraft Mythic+ dungeons using automation with AWS.

- If you want to understand how it's made. All my logic is in /backend/write.js and /frontend/src/hooks/useWowData.js.

- The data can be used to analyze player preferences, specifically, which set of \*affixes (weeks) players tend to like/dislike playing.

- \*Affixes are a combination of difficulty modifiers that change once a week and cycle over 12 weeks. Affixes keep the game interesting, but some affixes are harder than others and fewer players tend to play during those weeks.

### What exactly does it do?

- [This Reddit post explains how it works.](https://www.reddit.com/r/wow/comments/o5nocw/comment/h2ov91n/?utm_source=share&utm_medium=web2x&context=3)

- Summary from Reddit post: Calling Raider.io API returns a page count. Page count represents the number of pages in Raider.io's rankings for characters who have completed a Mythic+ dungeon. Each page contains 20 characters, hence page count multiply by 20 equals the total number of characters that have completed a set of affixes.

### How does this app work?

- It calls Raider.io API once a week and gets a total player count for a set of affixes.
- The call is automated using AWS Lambda and Eventbridge event.
- That data is repackaged with additional information for the front-end to work with.
- The front-end determines the current week and finds the corresponding rotation to calculate how many players have played that week.

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
  - Front-end - App.js: `season` `expansionName`
  - Delete text title and padding

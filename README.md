## Demo

### [View Live Demo](https://mythicplus.vercel.app/)

## About

- An app that prints player count in World of Warcraft Mythic+ dungeons using automation with AWS.

- The data can be used to analyze player preferences, specifically, which set of affixes (weeks) players tend to like/dislike playing.

- Affixes are a combination of difficulty modifiers that change once a week and cycle over 12 weeks. Affixes keep the game interesting, but some affixes are harder than others and fewer players tend to play during those weeks.

### What exactly does it do?

- [This Reddit post explains how this works.](https://www.reddit.com/r/wow/comments/o5nocw/comment/h2ov91n/?utm_source=share&utm_medium=web2x&context=3)

- Summary from Reddit post: Calling Raider.io API returns a page count. Page count represents the number of pages in Raider.io's rankings for characters who have completed a Mythic+ dungeon. Each page contains 20 characters, hence page count multiply by 20 equals the total number of characters that have completed a set of affixes.

- Example: To find out how many players played during week 13, you would have to know how many players played during week 1 (the only other time these set of affixes occured).

- Important to understand: Because of limitations with the Raider.io API, you cannot call the API to get a total count for a specific week, only the total count for a specific set of affixes.

### How does this app work?

- It calls Raider.io once a week and gets a total player count for a set of affixes.
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
        "week": 22,
        "date": "2021-11-30T01:19:41PST",
        "rotation": {
            "1": 29486,
            "2": 78106,
            "3": 83875,
            "4": 65917,
            "5": 61261,
            "6": 62912,
            "7": 58111,
            "8": 69797,
            "9": 60006,
            "10": 56528,
            "11": 27471,
            "12": 28721
        },
        "expansion": "sl",
        "season": 2,
        "affixes": [
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
            "Tyrannical-Bolstering-Explosive-Tormented"
        ]
    }
```

## Instructions for next update:

- At the start of next season, update these constants:
  - AWS Lambda - write.js function: `expansion` `season` `schedule` `startDate`
  - Front-end - App.js: `season` `startWeek` `expansionName` check `pageCount` changes
  - Delete text title and padding

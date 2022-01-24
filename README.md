## Demo

### [View Live Demo](https://mythicplus.vercel.app/)

## About

- An app that calculates player count in World of Warcraft Mythic+ Dungeons.

- This app is partially automated using AWS Lambda and EventBridge events. It only needs to be updated at the start of each season. The data comes from Raider.io API, but a database is required to make this data useful.

- [This Reddit post explains what information is being extracted.](https://www.reddit.com/r/wow/comments/o5nocw/comment/h2ov91n/?utm_source=share&utm_medium=web2x&context=3)

### How does it work?

- EventBridge schedules AWS Lambda to make a weekly fetch request to Raider.io API
- An AWS Lambda function repackages the Raider.io data with additional data to DynamoDB.
- Front end retrieves data from a Lambda read function connected to an API Gateway

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

- At the start of each season, update these constants:
  - AWS Lambda - write.js function: `expansion` `season` `schedule` `startDate`
  - Front-end - App.js: `season` `startWeek` `expansionName` check `pageCount` changes
  - Delete text title and padding

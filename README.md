## Demo

### [View Live Demo](https://mythicdungeons.vercel.app/)

- Please note, this data was taken from week 20 onward. Currenlty using fake data for testing.

## About

- An app that models player engagement data in World of Warcraft Mythic+ Dungeons.

- This app is partially automated using AWS Lambda and CloudWatch events. It only needs to be updated at the start of each season. The data comes from Raider.io API, but a database is required to make this data useful.

- [This Reddit post explains what information is being extracted.](https://www.reddit.com/r/wow/comments/o5nocw/comment/h2ov91n/?utm_source=share&utm_medium=web2x&context=3)

### How does it work?

- CloudWatch schedules AWS Lambda to make a weekly fetch request to Raider.io API
- AWS Lambda function repackages the Raider.io data with additional data to DynamoDB.
- Front end retrieves data from a Lambda read function connected to an API Gateway

### Example of repackaged database file:

```
[
    {
        "week": 20,
        "date": "2021-11-18T16:37:27PST",
        "rotation": {
            "1": 589720,
            "2": 1562120,
            "3": 1677500,
            "4": 1318340,
            "5": 1225220,
            "6": 1258240,
            "7": 1162200,
            "8": 1395720,
            "9": 847320,
            "10": 671400,
            "11": 549420,
            "12": 574420
        },
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
]
```

## Extra

- At the start of each season, update these constants:
  - AWS Lambda - write.js function: `season` `schedule` `startDate`
  - Front-end - App.js: `season` `startWeek` `expansionName`

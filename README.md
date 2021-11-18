## DEMO

### [View Live Demo](https://mythicdungeons.vercel.app/)

## About

- An app that models player engagement data in World of Warcraft Mythic + Dungeons.

- This app is partially automated using AWS Lambda and CloudWatch events. It only needs to be updated at the start of each season. The data comes from Raider.io API, but a database is required to make this data useful.

- [This Reddit post explains what information is being extracted.](https://www.reddit.com/r/wow/comments/o5nocw/comment/h2ov91n/?utm_source=share&utm_medium=web2x&context=3)

### How does it work?

- CloudWatch schedules AWS Lambda to make a weekly fetch request to Raider.io API
- AWS Lambda writes that data to DynamoDB.
- Front end retrieves data from a Lambda read function connected to API Gateway

### Example of database file

```
[
    {
        "week": 20,
        "date": "2021-11-18T00:35:07PST",
        "affix": {
            "1": 589720,
            "2": 1562120,
            "3": 1677500,
            "4": 1318340,
            "5": 1225220,
            "6": 1258240,
            "7": 1162180,
            "8": 1395580,
            "9": 808420,
            "10": 671400,
            "11": 549420,
            "12": 574420
        },
        "season": 2
    }
]
```

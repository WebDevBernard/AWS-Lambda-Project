## About

An app that models player engagement data in World of Warcraft Mythic + Dungeons.

- This app is partially automated using AWS Lambda and CloudWatch events. It only needs to be updated at the start of each season.

### Important

- [This reddit post explains how information is extracted from the RaiderIO API](https://www.reddit.com/r/wow/comments/o5nocw/comment/h2ov91n/?utm_source=share&utm_medium=web2x&context=3)

### How does it work?

- CloudWatch schedules AWS Lambda to make a weekly fetch request to Raider.io API
- AWS Lambda writes that data to DynamoDB.
- Front end retrieves data from API Gateway

### Example of database file

```
{
 "date": "2021-11-17T22:39:53",
 "season": "2",
 "cycle": 19,
 "weeks": {
  "1": 589720,
  "2": 1562120,
  "3": 1677500,
  "4": 1318340,
  "5": 1225220,
  "6": 1258240,
  "7": 1162180,
  "8": 1395580,
  "9": 806180,
  "10": 671400,
  "11": 549420,
  "12": 574420
 }
}
```

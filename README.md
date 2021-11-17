## About

An app that gets weekly player engagement data from Raider.io API. The purpose of this app is to automate a function to complete a very simple task. However, the data it is modelling may not be accurate.

### What information does it get?

- Mythic + character/player count per season.
- Read this for more information: [https://www.reddit.com/r/wow/comments/o5nocw/comment/h2ov91n/?utm_source=share&utm_medium=web2x&context=3](https://www.reddit.com/r/wow/comments/o5nocw/comment/h2ov91n/?utm_source=share&utm_medium=web2x&context=3)
- If you do not play WoW, this data is useful because it looks at which combination of affixes (difficulty modifiers) that players tend to like or dislike more. And with enough weekly data, you can get an estimate on how many people still play this game.

### How does it work?

- CloudWatch schedules AWS Lambda to make a weekly Axios request to Raider.io API
- AWS Lambda writes that data to DynamoDB
- Front end uses React and GraphQL to query DynamoDB and plot a graph (I have not implemented this part yet)

## Demo

### [Live Demo](https://mythicplus.vercel.app/)

## About

- This data is an estimate of weekly Mythic+ runs based on character count. It uses data from Raider.io API in lieu of an official count from Blizzard.

- This app is based on this [r/wow](https://www.reddit.com/r/wow/comments/o5nocw/comment/h2ov91n/?utm_source=share&utm_medium=web2x&context=3) post. It uses the same logic to get data and is automated using AWS.

## Installation

Back-end (AWS)

- make sure to update Required Changes every season in `back-end/write.js`
- copy and paste `back-end/write.js` and `back-end/read.js` into a AWS Lambda function. Need to also upload a lambda layer with all your node modules
- setup DynamoDB table named `wow` with `date` as key
- setup EventBridge that calls the write function with this cron job `0 20 ? * 6 *`
- setup API gateway that calls the read function
- copy and paste the API gateway `api-url` and `x-api-key` to an env file into these variables `REACT_APP_API_URL` and `REACT_APP_API_URL` inside your `front-end` folder

Front-end

- `cd front-end/`
- `npm install`
- make sure to update Required Changes every season in `front-end/App.tsx`
- `npm start`

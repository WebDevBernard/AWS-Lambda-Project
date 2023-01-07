const AWS = require("aws-sdk");
const db = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" });

exports.handler = (event, context, callback) => {
  const params = {
    TableName: "wow",
  };
  db.scan(params, (err, data) =>
    err ? callback(err, null) : callback(null, data.Items)
  );
};

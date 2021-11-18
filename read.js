const AWS = require("aws-sdk");
const db = new AWS.DynamoDB.DocumentClient({ region: "us-east-2" });

exports.handler = (event, context, callback) => {
  const params = {
    TableName: "wow",
  };
  db.scan(params, (err, data) =>
    err ? callback(err, null) : callback(null, data.Items)
  );
};

const AWS = require("aws-sdk");
const db = new AWS.DynamoDB.DocumentClient({ region: "us-east-2" });
const awsConfig = {
  region: "us-east-2",
  endpoint: "http://dynamodb.us-east-2.amazonaws.com",
  accessKeyId: "AKIAJDNCKLXFA7HBKUEA",
  secretAccessKey: "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",
};
AWS.config.update(awsConfig);

let fetchOneByKey = function () {
  var params = {
    TableName: "wow",
  };
  db.scan(params, (err, data) =>
    err ? callback(err, null) : callback(null, data.Items)
  );
};

fetchOneByKey();

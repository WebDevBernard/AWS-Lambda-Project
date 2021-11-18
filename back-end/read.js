var AWS = require("aws-sdk");
const db = new DynamoDBClient({ region: "us-east-2" });

const params = {
  TableName: "wow",
};
db.query(params, (err, data) =>
  err ? callback(err, null) : callback(null, data.Items)
);

fetchOneByKey();

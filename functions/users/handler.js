const AWS = require('aws-sdk');
const dynamoDb = require('../../lib/dynamodb');
const uuid = require('uuid');

module.exports.create = async (event) => {
  const data = JSON.parse(event.body);
  
  const params = {
    TableName: process.env.USERS_TABLE,
    Item: {
      userId: uuid.v1(),
      email: data.email,
      createdAt: new Date().toISOString(),
    },
  };

  try {
    await dynamoDb.put(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(params.Item),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
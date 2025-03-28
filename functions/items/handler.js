const dynamoDb = require('../../lib/dynamodb');
const uuid = require('uuid');

module.exports.create = async (event) => {
  const data = JSON.parse(event.body);
  
  const params = {
    TableName: process.env.ITEMS_TABLE,
    Item: {
      itemId: uuid.v1(),
      name: data.name,
      description: data.description,
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

module.exports.get = async (event) => {
  const params = {
    TableName: process.env.ITEMS_TABLE,
    Key: {
      itemId: event.pathParameters.id,
    },
  };

  try {
    const result = await dynamoDb.get(params).promise();
    if (!result.Item) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Item not found' }),
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify(result.Item),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
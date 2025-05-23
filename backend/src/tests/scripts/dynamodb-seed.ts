import { DynamoDB } from '@aws-sdk/client-dynamodb';

const ddb = new DynamoDB({
  region: "us-east-1",
  endpoint: "http://localhost:8000",
});

const seedData = [
  {
    productId: { S: 'A1' },
    name: { S: 'Seed Product' },
    price: { N: '49.99' }
  }
];

export const seed = async () => {
  for (const item of seedData) {
    await ddb.putItem({
      TableName: process.env.TABLE_NAME!,
      Item: item
    });
  }
};

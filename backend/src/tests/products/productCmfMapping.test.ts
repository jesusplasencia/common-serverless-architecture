import AWS from 'aws-sdk';
import { handler } from './../../products/handlers/product-cmf-mapping.ts';

import { BaseEventBridgeEvent } from '../../shared/types/eventbridge.ts';
import { ProductEventType } from '../../products/events.ts';
import { ProductEventDetail } from '../../products/types.ts'; 

AWS.config.update({
  region: "us-east-1",
  accessKeyId: "dummy",
  secretAccessKey: "dummy",
});

const tableName = "MyLocalTable";

const dynamo = new AWS.DynamoDB.DocumentClient({ region: "us-east-1", endpoint: "http://localhost:8000" })
const dynamodb = new AWS.DynamoDB({ region: "us-east-1", endpoint: "http://localhost:8000" })

const event : BaseEventBridgeEvent<ProductEventType.ProductVolCreated, ProductEventDetail> = {
  "detail-type": ProductEventType.ProductVolCreated,
  source: "my.app",
  detail: {
    "csc_product_id": "A10",
    "name": "Supertramp",
    "price": 9.95,
    "created_at": "2025-05-20",
    "last_modified_dt": "2025-05-21"
  }
};

const context : any = {};

beforeAll(async () => {
  // Delete table if exists (cleanup in case of re-run)
  try {
    await dynamodb.deleteTable({ TableName: tableName }).promise();
  } catch (err) {
    if (err.code !== 'ResourceNotFoundException') {
      throw err;
    }
  }

  // Create fresh table
  await dynamodb.createTable({
    TableName: tableName,
    KeySchema: [{ AttributeName: "product_id", KeyType: "HASH" }],
    AttributeDefinitions: [{ AttributeName: "product_id", AttributeType: "S" }],
    ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 }
  }).promise();
}, 10000);

afterAll(async () => {
  try {
    await dynamodb.deleteTable({ TableName: tableName }).promise();
  } catch (err) {
    console.error("Failed to clean up DynamoDB table:", err);
  } finally {
    console.log("Table Deleted. Bye.")
  }
}, 10000);

test("Processes event and writes to DynamoDB", async () => {
  const res = await handler(event, context);
  expect(res.status).toBe("SUCCESS");

  const result = await dynamo
    .get({ TableName: tableName, Key: { product_id: "A10" } })
    .promise();

  expect(result.Item).toBeDefined();
  expect(result?.Item?.name).toBe("Supertramp");
});

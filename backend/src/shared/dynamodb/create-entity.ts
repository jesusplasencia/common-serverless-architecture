import { dynamo } from './dynamo-client';

export async function createEntity(
  tableName: string,
  item: Record<string, any>
): Promise<void> {
  await dynamo.put({ TableName: tableName, Item: item }).promise();
}

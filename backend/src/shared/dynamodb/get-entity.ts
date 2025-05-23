import { dynamo } from './dynamo-client';

export async function getEntity<T = any>(
  tableName: string,
  key: Record<string, any>
): Promise<T | null> {
  const result = await dynamo.get({ TableName: tableName, Key: key }).promise();
  return result.Item as T ?? null;
}

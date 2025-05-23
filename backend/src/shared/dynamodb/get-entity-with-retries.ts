import { getEntity } from './get-entity';

export async function getEntityWithRetries<T>(
  tableName: string,
  key: Record<string, any>,
  retries = 3,
  delayMs = 500
): Promise<T | null> {
  for (let attempt = 0; attempt < retries; attempt++) {
    const entity = await getEntity<T>(tableName, key);
    if (entity) return entity;
    await new Promise((res) => setTimeout(res, delayMs));
  }
  return null;
}

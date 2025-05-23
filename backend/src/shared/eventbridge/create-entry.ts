// shared/eventbridge/create-entry.ts

import { PutEventsCommandInput } from "@aws-sdk/client-eventbridge";

/**
 * Helper to create a typed EventBridge entry
 * @param source - The event source (e.g., "my.service")
 * @param detailType - The event type (e.g., "ProductUpdated")
 * @param detail - The event detail object (will be stringified)
 * @param busName - Optional custom event bus name (defaults to "default")
 */
export function createEventBridgeEntry<TDetail>(
  source: string,
  detailType: string,
  detail: TDetail,
  busName: string = "default"
): PutEventsCommandInput["Entries"][0] {
  return {
    Source: source,
    DetailType: detailType,
    Detail: JSON.stringify(detail),
    EventBusName: busName,
  };
}

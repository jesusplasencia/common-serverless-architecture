// shared/eventbridge/base-event.ts

/**
 * Generic typed EventBridge Event format.
 * @template TDetailType - Type of the event detail (e.g., "ProductCmfMapping")
 * @template TDetail - Payload structure
 */
export interface EventBridgeEvent<TDetailType extends string, TDetail> {
  version: string;
  id: string;
  "detail-type": TDetailType;
  source: string;
  account: string;
  time: string;
  region: string;
  resources: string[];
  detail: TDetail;
}

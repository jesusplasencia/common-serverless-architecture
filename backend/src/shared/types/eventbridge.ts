export interface BaseEventBridgeEvent<TDetailType extends string, TDetail> {
  version?: string;
  id?: string;
  "detail-type": TDetailType;
  source?: string;
  account?: string;
  time?: string;
  region?: string;
  resources?: string[];
  detail: TDetail;
}

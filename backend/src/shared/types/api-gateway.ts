export interface ApiGatewayEvent {
  resource: string;
  path: string;
  httpMethod: string;
  headers: { [key: string]: string } | null;
  multiValueHeaders: { [key: string]: string[] } | null;
  queryStringParameters: { [key: string]: string } | null;
  multiValueQueryStringParameters: { [key: string]: string[] } | null;
  pathParameters: { [key: string]: string } | null;
  stageVariables: { [key: string]: string } | null;
  requestContext: {
    accountId: string;
    resourceId: string;
    stage: string;
    requestId: string;
    identity: {
      sourceIp: string;
      userAgent: string;
    };
    httpMethod: string;
    apiId: string;
  };
  body: string | null;
  isBase64Encoded: boolean;
}

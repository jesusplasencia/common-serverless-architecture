import { ApiGatewayEvent } from './../../shared/types/api-gateway.ts';

export const handler = async (event: ApiGatewayEvent) => {

  const { path, httpMethod, body } = event;

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `You sent a ${httpMethod} to ${path}`,
      data: JSON.parse(body || '{}'),
    })
  }
}

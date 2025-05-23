import AWS from 'aws-sdk';

const isOffline = process.env.IS_OFFLINE === 'true';

console.log('isOffline:', isOffline)

const options: AWS.DynamoDB.DocumentClient.DocumentClientOptions & AWS.DynamoDB.ClientConfiguration = {
  region: process.env.AWS_REGION || 'us-east-1',
};

if (isOffline) {
  options.endpoint = 'http://localhost:8000';
  options.accessKeyId= 'dummy'; 
  options.secretAccessKey = 'dummy';
}

export const dynamo = new AWS.DynamoDB.DocumentClient(options);

export interface Context {
    callbackWaitsForEmptyEventLoop: boolean;
    functionName: string;
    functionVersion: string;
    invokedFunctionArn: string;
    memoryLimitInMB: string;
    awsRequestId: string;
    logGroupName: string;
    logStreamName: string;
    getRemainingTimeInMillis: () => number;
    done: (error?: Error | null, result?: any) => void;
    fail: (error: Error | string) => void;
    succeed: (messageOrObject: any) => void;
  }
  

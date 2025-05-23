import { Context } from '../types';

export class Logger {
  private requestId: string;

  constructor(context: Context) {
    this.requestId = context.awsRequestId;
  }

  log(message: string, metadata?: Record<string, unknown>) {
    console.log(JSON.stringify({
      timestamp: new Date().toISOString(),
      requestId: this.requestId,
      message,
      ...metadata
    }));
  }

  audit(message: string, metadata?: Record<string, unknown>) {
    console.log(JSON.stringify({
      timestamp: new Date().toISOString(),
      requestId: this.requestId,
      message,
      ...metadata
    }));
  }

  error(message: string, metadata?: Record<string, unknown>) {
    console.log(JSON.stringify({
      timestamp: new Date().toISOString(),
      requestId: this.requestId,
      message,
      ...metadata
    }));
  }

}

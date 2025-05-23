declare namespace NodeJS {
  interface ProcessEnv {
    AWS_REGION?: "us-east-1";
    TABLE_NAME: string;
    STAGE: "local";
  }
}

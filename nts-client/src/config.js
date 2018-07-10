export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "nts-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://wtyjo23ypi.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_fqYOXncUG",
    APP_CLIENT_ID: "20fc0fgie9pr216biutk9mnnmg",
    IDENTITY_POOL_ID: "us-east-2:a988bcae-d294-4a9d-b729-6f2b6fcb6557"
  }
};

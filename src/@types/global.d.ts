declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ANDROID_CLIENT_ID: string;
      IOS_CLIENT_ID: string;
      REALM_APP_ID: string;
      GOOGLE_MAPS_API_KEY: string;
    }
  }
}

export {};

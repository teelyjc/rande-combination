declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ADDRESS: string;
      PORT: number;

      NODE_ENV: "production" | "development";
    }
  }
}

export {};

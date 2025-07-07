export {};

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
        role: string;
      };
    }
  }

  // ✅ Custom response format type
  interface ApiResponse<T = any> {
    success: boolean;
    message: string;
    data?: T;
  }

  // 🛠️ Custom environment variables (optional)
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production" | "test";
      PORT?: string;
      DATABASE_URL: string;
      JWT_SECRET: string;
    }
  }
}

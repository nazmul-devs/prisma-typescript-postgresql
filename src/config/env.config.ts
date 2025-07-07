import dotenv from "dotenv";
class EnvConfig {
  readonly port: string;
  readonly databaseUrl: string;
  readonly nodeEnv: string;

  constructor() {
    dotenv.config();

    this.port = process.env.PORT || "5000";
    this.nodeEnv = this.getRequired("NODE_ENV");

    this.databaseUrl = this.getRequired("DATABASE_URL");
  }

  private getRequired(key: string): string {
    const value = process.env[key];
    if (!value)
      throw new Error(`Missing required environment variable: ${key}`);
    return value;
  }
}

export const ENV = new EnvConfig();

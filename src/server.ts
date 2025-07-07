import app from "./app";
import { ENV } from "./config/env.config";

const server = app.listen(ENV.port, () => {
  console.log(
    `✅ Server running on http://localhost:${ENV.port} in ${ENV.nodeEnv} mode`
  );
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("🛑 Unhandled Rejection:", reason);
  server.close(() => process.exit(1));
});

process.on("SIGTERM", () => {
  console.log("👋 SIGTERM received. Shutting down gracefully...");
  server.close(() => {
    console.log("💥 Server closed");
  });
});

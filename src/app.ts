import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import { errorHandler, notFoundHandler } from "./middlewares/errorHandler";
import router from "./routes/routes";
import { rateLimiter } from "./middlewares/rateLimit.middleware";
import rootRoute from "./core/root/root.route";

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(rateLimiter);

// Routes
app.use("/", rootRoute);
app.use("/api/v1", router);

// 404 Not Found handler
app.use(notFoundHandler);

// Global error handler
app.use(errorHandler);

export default app;

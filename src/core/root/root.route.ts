import express from "express";

const rootRoute = express.Router();

rootRoute.get("/", (_req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to API",
    version: "1.0.0",
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
});

rootRoute.get("/health", (_req, res) => {
  res.status(200).send("OK");
});

rootRoute.get("/status", (_req, res) => {
  res.status(200).json({
    status: "healthy",
    uptime: process.uptime(),
    timestamp: Date.now(),
  });
});

export default rootRoute;

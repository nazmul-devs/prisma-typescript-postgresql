// src/middlewares/validate.ts
import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

export function validate(
  schema: ZodSchema,
  property: "body" | "query" | "params" = "body"
) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validationResult = schema.safeParse(req[property]);

    if (!validationResult.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: validationResult.error.errors,
      });
    }

    req[property] = validationResult.data;

    next();
  };
}

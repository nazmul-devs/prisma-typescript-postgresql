import { Response } from "express";
import { error, success } from "../../utils/api-response";

export abstract class BaseController {
  protected success<T>(
    res: Response,
    data: T,
    message = "Success",
    statusCode = 200
  ) {
    return res.status(statusCode).json(success(data, message));
  }

  protected error(
    res: Response,
    message = "Something went wrong",
    statusCode = 500
  ) {
    return res.status(statusCode).json(error(message, statusCode));
  }
}

import { Request, Response } from "express";
import { UserService } from "./user.service";
import { BaseController } from "../../core/base/base.controller";

export class UserController extends BaseController {
  private userService = new UserService();

  create = async (req: Request, res: Response) => {
    try {
      const user = await this.userService.createUser(req.body);
      return this.success(res, user, "User created");
    } catch (err) {
      return this.error(res, "Failed to create user");
    }
  };

  findAll = async (_req: Request, res: Response) => {
    try {
      const users = await this.userService.findAllUser();
      return this.success(res, users, "Users fetched");
    } catch (err) {
      return this.error(res, "Failed to fetch users");
    }
  };
}

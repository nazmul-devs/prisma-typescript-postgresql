import { BaseRoute } from "../../core/base/base.routes";
import { asyncHandler } from "../../middlewares/asyncHandler";
import { validate } from "../../middlewares/validate.middleware";
import { UserController } from "./user.controller";
import { CreateUserSchema } from "./user.validator";

export class userRoute extends BaseRoute {
  private controller = new UserController();
  constructor() {
    super();
    this.initializeRoutes();
  }

  protected initializeRoutes(): void {
    this.router
      .route("/")
      .get(asyncHandler(this.controller.findAll))
      .post(validate(CreateUserSchema), asyncHandler(this.controller.create));
  }
}

import { Router } from "express";
import { asyncHandler } from "../../middlewares/asyncHandler";
import { ProductController } from "./product.controller";

export class ProductRoutes {
  public router: Router;
  private controller: ProductController;

  constructor() {
    this.router = Router();
    this.controller = new ProductController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", asyncHandler(this.controller.getProducts));
  }
}

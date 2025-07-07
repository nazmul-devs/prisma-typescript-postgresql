import { Request, Response } from "express";
import { success } from "../../utils/api-response";
import { ProductService } from "./product.service";

export class ProductController {
  private userService = new ProductService();

  getProducts = async (_req: Request, res: Response) => {
    const data = await this.userService.getProducts();
    return res.json(success(data));
  };
}

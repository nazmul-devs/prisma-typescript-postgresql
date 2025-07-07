import { prisma } from "../../libs/prisma";

export class ProductService {
  async getProducts() {
    return await prisma.product.findMany();
  }
}

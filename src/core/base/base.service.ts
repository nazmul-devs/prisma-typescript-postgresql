import { PrismaClient } from "@prisma/client";
import { prisma } from "../../libs/prisma";

export abstract class BaseService<TModel, TCreateInput> {
  protected model: any; // Each subclass must define this
  protected prisma: PrismaClient = prisma;

  constructor(model: any) {
    this.model = model;
  }

  async create(data: TCreateInput): Promise<TModel> {
    try {
      return await this.model.create({ data });
    } catch (error) {
      this.handleError(error);
    }
  }

  async findAll(): Promise<TModel[]> {
    try {
      return await this.model.findMany();
    } catch (error) {
      this.handleError(error);
    }
  }

  async findById(id: string): Promise<TModel | null> {
    try {
      return await this.model.findUnique({ where: { id } });
    } catch (error) {
      this.handleError(error);
    }
  }

  async update(id: string, data: Partial<TCreateInput>): Promise<TModel> {
    try {
      return await this.model.update({
        where: { id },
        data,
      });
    } catch (error) {
      this.handleError(error);
    }
  }

  async delete(id: string): Promise<TModel> {
    try {
      return await this.model.delete({ where: { id } });
    } catch (error) {
      this.handleError(error);
    }
  }

  protected handleError(error: any): never {
    console.error("Service Error:", error);
    throw new Error("Internal Server Error");
  }
}

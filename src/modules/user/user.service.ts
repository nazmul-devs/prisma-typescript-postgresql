import { User } from "@prisma/client";
import { BaseService } from "../../core/base/base.service";
import { prisma } from "../../libs/prisma";
import { CreateUserDto } from "./user.validator";

export class UserService extends BaseService<User, CreateUserDto> {
  constructor() {
    super(prisma.user);
  }

  async createUser(payload: CreateUserDto): Promise<User | null> {
    return this.create(payload);
  }

  async findAllUser(): Promise<User[] | null> {
    return this.findAll();
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email: email } });
  }
}

import { Injectable } from "@nestjs/common";

import { PrismaService } from "~/database/prisma/prisma.service";

import { UserInput } from "./dtos/user.input";

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAll() {
    const users = await this.prismaService.user.findMany();
    return { users };
  }

  async getUserById(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: { id },
    });
    return user;
  }

  async createUser(data: UserInput) {
    const userCreate = await this.prismaService.user.create({
      data: data,
    });
    return userCreate;
  }

  async deleteUser(id: string) {
    const userDelete = await this.prismaService.user.delete({
      where: { id },
    });
    return userDelete;
  }
}

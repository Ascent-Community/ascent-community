import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";

import { UserInput } from "./dtos/user.input";
import { UserModel } from "./dtos/user.model";
import { UserService } from "./user.service";

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserModel])
  async getUsers() {
    const { users } = await this.userService.getAll();
    return users;
  }

  @Query(() => UserModel, { nullable: true })
  async getUserById(@Args("id") id: string) {
    const user = await this.userService.getUserById(id);
    return user;
  }

  @Mutation(() => UserModel)
  async createUser(@Args("data") userData: UserInput) {
    const newUser = await this.userService.createUser(userData);
    return newUser;
  }

  @Mutation(() => UserModel, { nullable: true })
  async deleteUser(@Args("id") id: string) {
    const userDelete = await this.userService.deleteUser(id);
    return userDelete;
  }
}

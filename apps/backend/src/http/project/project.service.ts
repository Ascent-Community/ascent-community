import { Injectable } from "@nestjs/common";

import { PrismaService } from "~/database/prisma/prisma.service";

import { UserService } from "../user/user.service";
import { ProjectCreateInput, ProjectInput } from "./dtos/project.input";

@Injectable()
export class ProjectService {
  constructor(private readonly prismaService: PrismaService) {}
  async createProject(data: ProjectCreateInput) {
    const newProject = await this.prismaService.project.create({
      data,
    });
    return newProject;
  }

  async getAllProjects() {
    const projects = await this.prismaService.project.findMany();
    return projects;
  }

  async getProjectById(id: string) {
    const project = await this.prismaService.project.findUnique({
      where: { id },
    });
    return project;
  }

  async updateProject(data: ProjectInput) {
    const projectUpdated = await this.prismaService.project.update({
      where: { id: data.id },
      data: data,
    });
    return projectUpdated;
  }

  async deleteProject(id: string) {
    const projectDelete = await this.prismaService.project.delete({
      where: { id },
    });
    return projectDelete;
  }

  async connectUserToProject({
    userId,
    projectId,
  }: {
    userId: string;
    projectId: string;
  }) {
    const userService = new UserService(this.prismaService);
    const user = await userService.getUserById(userId);
    if (user) {
      await this.prismaService.project.update({
        where: { id: projectId },
        data: {
          users: {
            connect: {
              id: userId,
            },
          },
        },
      });
    }
    return null;
  }
}

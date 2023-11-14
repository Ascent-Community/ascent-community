import { Args, Query, Mutation, Resolver } from "@nestjs/graphql";

import {
  ProjectCreateInput,
  ProjectInput,
  UserToProjectInput,
} from "./dtos/project.input";
import { ProjectModel } from "./dtos/project.model";
import { ProjectService } from "./project.service";

@Resolver()
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Mutation(() => ProjectModel)
  async createProject(@Args("data") projectData: ProjectCreateInput) {
    const newProject = await this.projectService.createProject(projectData);
    return newProject;
  }

  @Query(() => [ProjectModel])
  async getProjects() {
    const projects = await this.projectService.getAllProjects();
    return projects;
  }

  @Query(() => ProjectModel, { nullable: true })
  async getProjectById(@Args("id") id: string) {
    const project = await this.projectService.getProjectById(id);
    return project;
  }

  @Mutation(() => ProjectModel, { nullable: true })
  async updateProjectById(@Args("data") projectData: ProjectInput) {
    const project = await this.projectService.updateProject(projectData);
    return project;
  }

  @Mutation(() => ProjectModel, { nullable: true })
  async deleteProjectById(@Args("id") id: string) {
    const projectDelete = await this.projectService.deleteProject(id);
    return projectDelete;
  }

  @Mutation(() => String, { nullable: true })
  async userToProject(@Args("data") data: UserToProjectInput) {
    await this.projectService.connectUserToProject(data);
    return "deu bom";
  }
}

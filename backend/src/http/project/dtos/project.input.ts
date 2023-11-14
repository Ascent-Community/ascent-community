import { Field, ID, InputType } from "@nestjs/graphql";
import { createZodDto } from "nestjs-zod";
import { z } from "nestjs-zod/z";

import { Status } from "../enums/project.enum";

export const ProjectCreateSchema = z.object({
  name: z.string(),
  description: z.string().min(3).max(255),
});

export const ProjectSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().min(3).max(255),
  status: z.nativeEnum(Status),
});

export const UserToProjectSchema = z.object({
  userId: z.string().uuid(),
  projectId: z.string().uuid(),
});

@InputType()
export class ProjectCreateInput extends createZodDto(ProjectCreateSchema) {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;
}

@InputType()
export class ProjectInput extends createZodDto(ProjectSchema) {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => Status)
  status: Status;
}

@InputType()
export class UserToProjectInput extends createZodDto(
  z.object({
    userId: z.string().uuid(),
    projectId: z.string().uuid(),
  }),
) {
  @Field(() => ID)
  userId: string;

  @Field(() => ID)
  projectId: string;
}

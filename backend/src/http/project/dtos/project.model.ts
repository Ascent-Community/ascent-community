import { Field, ID, ObjectType, registerEnumType } from "@nestjs/graphql";

import { Status } from "../enums/project.enum";

registerEnumType(Status, {
  name: "Status",
});

@ObjectType()
export class ProjectModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Status)
  status: Status;
}
export { Status };

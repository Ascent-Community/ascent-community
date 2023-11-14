import { Field, InputType } from "@nestjs/graphql";
import { createZodDto } from "nestjs-zod";
import { z } from "nestjs-zod/z";

export const UserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

@InputType()
export class UserInput extends createZodDto(UserSchema) {
  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;
}

import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ZodError } from "nestjs-zod/z";

import { envSchema } from "~/constants/env";

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      validate(config) {
        try {
          return envSchema.parse(config);
        } catch (err) {
          if (err instanceof ZodError) {
            console.error(
              "❌ Invalid environment variables:",
              err.flatten().fieldErrors,
            );
          }
          throw new Error("Invalid environment variables");
        }
      },
      validationOptions: {
        allowUnknown: false,
      },
    }),
  ],
})
export class EnvModule {}

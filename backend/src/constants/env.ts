import { z } from "nestjs-zod/z";

export const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string().url(),
  DISABLE_ERD: z.coerce.boolean().default(true),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
});

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}

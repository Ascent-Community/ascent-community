import { Module } from "@nestjs/common";

import { HttpModule } from "../http/http.module";
import { EnvModule } from "./env.module";
import { ValidationModule } from "./validation.module";

@Module({
  imports: [EnvModule, ValidationModule, HttpModule],
})
export class AppModule {}

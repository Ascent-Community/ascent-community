import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { ApolloDriver, type ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

import { DatabaseModule } from "~/database/database.module";

import { ProjectResolver } from "./project/project.resolver";
import { ProjectService } from "./project/project.service";
import { UserResolver } from "./user/user.resolver";
import { UserService } from "./user/user.service";

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
  ],
  providers: [UserResolver, UserService, ProjectResolver, ProjectService],
})
export class HttpModule {}

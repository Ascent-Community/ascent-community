import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { Test } from "@nestjs/testing";
import request from "supertest-graphql";

import { UserModel } from "~/http/user/dtos/user.model";
import { AppModule } from "~/modules/app.module";

describe("UserResolver (e2e)", () => {
  let app: NestFastifyApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication(new FastifyAdapter());
    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  });

  it("should return users", async () => {
    const { data } = await request<{ getUsers: UserModel[] }>(
      app.getHttpServer(),
    )
      .query(/* GraphQL */ `
        query GetUsers {
          getUsers {
            email
            name
            id
          }
        }
      `)
      .expectNoErrors();

    expect(data?.getUsers).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ email: "fellipechan@gmail.com" }),
      ]),
    );
  });
});

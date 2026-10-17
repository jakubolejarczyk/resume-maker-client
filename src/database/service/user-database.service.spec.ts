import { TestBed } from "@angular/core/testing";

import { UserDatabaseService } from "./user-database.service";
import * as util from "../util/database.util";
import { USER_0 } from "../const/user-database.const";
import { UserDataDatabaseModel } from "../model/data/user-data-database.model";
import { BaseDatabaseModel } from "../model/base/base-database.model";

describe("User Database Service", () => {
  let service: UserDatabaseService;

  beforeEach(() => {
    service = TestBed.inject(UserDatabaseService);
  });

  it(util.messageCreate("user", 1), () => {
    const USER_1: BaseDatabaseModel<UserDataDatabaseModel> = {
      data: {
        firstName: "Anna",
        lastName: "Kowalska",
        phoneNumber: "+48 600 123 456",
        email: "anna.kowalska@example.com",
        city: "Warsaw",
        country: "Poland",
        links: [
            "linkedin.com/in/anna-kowalska",
            "github.com/anna-kowalska"
        ]
      },
      metadata: {
        id: 1,
        order: 1,
        isSelected: false
      }
    };
    util.testCreate(service, USER_1, [USER_0, USER_1]); 
  });

  it(util.messageReadAll("users"), () => util.testReadAll(service, [USER_0]));

  it(util.messageReadById("user", 0), () => util.testReadById(service, 0, USER_0));

  it(util.messageReadByParentId("users", 0), () => util.testReadByParentId(service, 0, []));

  it(util.messageUpdate("user", 0), () => {
    const USER_0_COPY = structuredClone(USER_0);
    USER_0_COPY.data.city = "Warsaw";
    util.testUpdate(service, USER_0_COPY); 
  });

  it(util.messageDelete("user", 0), () => util.testDelete(service, 0, []));
});
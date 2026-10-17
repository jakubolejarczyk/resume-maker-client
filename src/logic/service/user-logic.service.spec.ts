import { TestBed } from "@angular/core/testing";

import { UserLogicService } from "./user-logic.service";
import { UserDatabaseService } from "../../database/service/user-database.service";
import * as util from "../util/logic.util";
import { USER_0 } from "../../database/const/user-database.const";

describe("User Logic Service", () => {
  let database: UserDatabaseService;
  let logic: UserLogicService;

  beforeEach(() => {
    database = TestBed.inject(UserDatabaseService);
    logic = TestBed.inject(UserLogicService);
  });

  it(util.messageSelect("user", 0), () => util.testSelect(database, logic, 0, [
    { ...USER_0, metadata: { ...USER_0.metadata, isSelected: true } }
  ]));
});
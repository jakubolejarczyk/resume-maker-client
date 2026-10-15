import { Injectable } from "@angular/core";

import { BaseDatabaseService } from "./base-database.service";
import { UserDatabaseModel } from "../model/user-database.model";
import { UserDatabaseConst } from "../const/user-database.const";

@Injectable({ providedIn: "root" })
export class UserDatabaseService extends BaseDatabaseService<UserDatabaseModel> {
  constructor() {
    super([
      UserDatabaseConst.USER_PERSONAL_0,
      UserDatabaseConst.USER_TEST_1
    ]);
  }
}
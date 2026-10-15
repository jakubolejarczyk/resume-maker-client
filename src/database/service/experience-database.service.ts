import { Injectable } from "@angular/core";

import { BaseDatabaseService } from "./base-database.service";
import { ExperienceDatabaseModel } from "../model/experience-database.model";
import { ExperienceDatabaseConst } from "../const/experience-database.const";

@Injectable({ providedIn: "root" })
export class ExperienceDatabaseService extends BaseDatabaseService<ExperienceDatabaseModel> {
  constructor() {
    super([
      ExperienceDatabaseConst.EXPERIENCE_PERSONAL_0,
      ExperienceDatabaseConst.EXPERIENCE_PERSONAL_1,
      ExperienceDatabaseConst.EXPERIENCE_TEST_2
    ]);
  }
}
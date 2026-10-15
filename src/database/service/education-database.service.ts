import { Injectable } from "@angular/core";

import { BaseDatabaseService } from "./base-database.service";
import { EducationDatabaseModel } from "../model/education-database.model";
import { EducationDatabaseConst } from "../const/education-database.const";

@Injectable({ providedIn: "root" })
export class EducationDatabaseService extends BaseDatabaseService<EducationDatabaseModel> {
  constructor() {
    super([
      EducationDatabaseConst.EDUCATION_PERSONAL_0,
      EducationDatabaseConst.EDUCATION_PERSONAL_1,
      EducationDatabaseConst.EDUCATION_TEST_2
    ]);
  }
}
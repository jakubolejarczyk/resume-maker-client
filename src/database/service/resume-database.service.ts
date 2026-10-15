import { Injectable } from "@angular/core";

import { BaseDatabaseService } from "./base-database.service";
import { ResumeDatabaseModel } from "../model/resume-database.model";
import { ResumeDatabaseConst } from "../const/resume-database.const";

@Injectable({ providedIn: "root" })
export class ResumeDatabaseService extends BaseDatabaseService<ResumeDatabaseModel> {
  constructor() {
    super([
      ResumeDatabaseConst.RESUME_PERSONAL_0,
      ResumeDatabaseConst.RESUME_TEST_1
    ]);
  }
}
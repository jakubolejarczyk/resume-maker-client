import { Injectable } from "@angular/core";

import { BaseDatabaseService } from "./base-database.service";
import { SkillDatabaseModel } from "../model/skill-database.model";
import { SkillDatabaseConst } from "../const/skill-database.const";

@Injectable({ providedIn: "root" })
export class SkillDatabaseService extends BaseDatabaseService<SkillDatabaseModel> {
  constructor() {
    super([
      SkillDatabaseConst.SKILL_PERSONAL_0,
      SkillDatabaseConst.SKILL_PERSONAL_1,
      SkillDatabaseConst.SKILL_PERSONAL_2,
      SkillDatabaseConst.SKILL_PERSONAL_3,
      SkillDatabaseConst.SKILL_TEST_4,
      SkillDatabaseConst.SKILL_TEST_5
    ]);
  }
}
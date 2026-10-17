import { TestBed } from "@angular/core/testing";

import { SkillDatabaseService } from "./skill-database.service";
import * as util from "../util/database.util";
import { SKILL_0, SKILL_1, SKILL_2, SKILL_3 } from "../const/skill-database.const";

describe("Skill Database Service", () => {
  let service: SkillDatabaseService;

  beforeEach(() => {
    service = TestBed.inject(SkillDatabaseService);
  });

  it(util.messageReadAll("skills"), () => util.testReadAll(service, [SKILL_0, SKILL_1, SKILL_2, SKILL_3]));

  it(util.messageReadById("skill", 2), () => util.testReadById(service, 2, SKILL_2));
  
  it(util.messageReadByParentId("skills", 0), () => util.testReadByParentId(service, 0, [SKILL_0, SKILL_1, SKILL_2, SKILL_3]));

  it(util.messageDelete("skill", 1), () => util.testDelete(service, 1, [SKILL_0, SKILL_2, SKILL_3]));
});
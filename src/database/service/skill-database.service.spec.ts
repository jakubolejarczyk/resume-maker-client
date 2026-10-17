import { TestBed } from "@angular/core/testing";

import { SkillDatabaseService } from "./skill-database.service";
import { messageReadAll, testReadAll } from "../util/database.util";
import { SKILL_0, SKILL_1, SKILL_2, SKILL_3 } from "../const/skill-database.const";

describe("Skill Database Service", () => {
  let service: SkillDatabaseService;

  beforeEach(() => {
    service = TestBed.inject(SkillDatabaseService);
  });

  it(messageReadAll("skills"), () => testReadAll(service, [SKILL_0, SKILL_1, SKILL_2, SKILL_3]));

  // it(messageReadById("skill", 0), () => testReadById(service, data, 0));

  // it(messageDelete("skill", 0), () => testDelete(service, data, 0));
});
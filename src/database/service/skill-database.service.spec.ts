import { TestBed } from "@angular/core/testing";

import { SkillDatabaseService } from "./skill-database.service";
import * as util from "../util/database.util";
import { SKILL_0, SKILL_1, SKILL_2, SKILL_3 } from "../const/skill-database.const";
import { BaseDatabaseModel } from "../model/base/base-database.model";
import { SkillDataDatabaseModel } from "../model/data/skill-data-database.model";

describe("Skill Database Service", () => {
  let service: SkillDatabaseService;

  beforeEach(() => {
    service = TestBed.inject(SkillDatabaseService);
  });

  it(util.messageCreate("skill", 4), () => {
    const SKILL_4: BaseDatabaseModel<SkillDataDatabaseModel> = {
      data: {
        category: "Soft Skills",
        skills: ["Communication", "Teamwork", "Problem Solving", "Time Management"],
      },
      metadata: {
        id: 4,
        parentId: 0,
        order: 4,
        isSelected: false
      }
    };
    util.testCreate(service, SKILL_4, [SKILL_0, SKILL_1, SKILL_2, SKILL_3, SKILL_4]); 
  });

  it(util.messageReadAll("skills"), () => util.testReadAll(service, [SKILL_0, SKILL_1, SKILL_2, SKILL_3]));

  it(util.messageReadById("skill", 2), () => util.testReadById(service, 2, SKILL_2));
  
  it(util.messageReadByParentId("skills", 0), () => util.testReadByParentId(service, 0, [SKILL_0, SKILL_1, SKILL_2, SKILL_3]));
  
  it(util.messageUpdate("skill", 2), () => {
    const SKILL_2_COPY = structuredClone(SKILL_2);
    SKILL_2_COPY.data.category = "Animals";
    util.testUpdate(service, SKILL_2_COPY); 
  });

  it(util.messageDelete("skill", 1), () => util.testDelete(service, 1, [SKILL_0, SKILL_2, SKILL_3]));
});
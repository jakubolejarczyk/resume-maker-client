import { TestBed } from "@angular/core/testing";

import { SkillLogicService } from "./skill-logic.service";
import { SkillDatabaseService } from "../../database/service/skill-database.service";
import * as util from "../util/logic.util";
import { SKILL_0, SKILL_1, SKILL_2, SKILL_3 } from "../../database/const/skill-database.const";

describe("Skill Logic Service", () => {
  let database: SkillDatabaseService;
  let logic: SkillLogicService;

  beforeEach(() => {
    database = TestBed.inject(SkillDatabaseService);
    logic = TestBed.inject(SkillLogicService);
  });

  it(util.messageSelect("skill", 2), () => util.testSelect(database, logic, 2, [
    SKILL_0,
    SKILL_1,
    { ...SKILL_2, metadata: { ...SKILL_2.metadata, isSelected: true } },
    SKILL_3
  ]));
  
  it(util.messageDeselect("skill", 2), () => util.testDeselect(database, logic, 2, [SKILL_0, SKILL_1, SKILL_2, SKILL_3]));
  
  it(util.messageMoveUp("skill", 2), () => util.testMoveUp(database, logic, 2, [
    SKILL_0,
    { ...SKILL_1, metadata: { ...SKILL_1.metadata, order: 2 } },
    { ...SKILL_2, metadata: { ...SKILL_2.metadata, order: 1 } },
    SKILL_3
  ]));
});
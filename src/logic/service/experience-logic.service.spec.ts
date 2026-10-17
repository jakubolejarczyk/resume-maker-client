import { TestBed } from "@angular/core/testing";

import { ExperienceLogicService } from "./experience-logic.service";
import { ExperienceDatabaseService } from "../../database/service/experience-database.service";
import * as util from "../util/logic.util";
import { EXPERIENCE_0, EXPERIENCE_1 } from "../../database/const/experience-database.const";

describe("Experience Logic Service", () => {
  let database: ExperienceDatabaseService;
  let logic: ExperienceLogicService;

  beforeEach(() => {
    database = TestBed.inject(ExperienceDatabaseService);
    logic = TestBed.inject(ExperienceLogicService);
  });

  it(util.messageSelect("experience", 1), () => util.testSelect(database, logic, 1, [
    EXPERIENCE_0,
    { ...EXPERIENCE_1, metadata: { ...EXPERIENCE_1.metadata, isSelected: true } }
  ]));
      
  it(util.messageDeselect("experience", 1), () => util.testDeselect(database, logic, 1, [EXPERIENCE_0, EXPERIENCE_1]));
});
import { TestBed } from "@angular/core/testing";

import { EducationLogicService } from "./education-logic.service";
import { EducationDatabaseService } from "../../database/service/education-database.service";
import * as util from "../util/logic.util";
import { EDUCATION_0, EDUCATION_1 } from "../../database/const/education-database.const";

describe("Education Logic Service", () => {
  let database: EducationDatabaseService;
  let logic: EducationLogicService;

  beforeEach(() => {
    database = TestBed.inject(EducationDatabaseService);
    logic = TestBed.inject(EducationLogicService);
  });

  it(util.messageSelect("education", 1), () => util.testSelect(database, logic, 1, [
    EDUCATION_0,
    { ...EDUCATION_1, metadata: { ...EDUCATION_1.metadata, isSelected: true } }
  ]));
        
  it(util.messageDeselect("education", 1), () => util.testDeselect(database, logic, 1, [EDUCATION_0, EDUCATION_1]));

  it(util.messageMoveUp("education", 1), () => util.testMoveUp(database, logic, 1, [
    { ...EDUCATION_0, metadata: { ...EDUCATION_0.metadata, order: 1 } },
    { ...EDUCATION_1, metadata: { ...EDUCATION_1.metadata, order: 0 } }
  ]));

  it(util.messageMoveDown("education", 1), () => util.testMoveDown(database, logic, 1, [
    { ...EDUCATION_0, metadata: { ...EDUCATION_0.metadata, order: 0 } },
    { ...EDUCATION_1, metadata: { ...EDUCATION_1.metadata, order: 1 } }
  ]));
});
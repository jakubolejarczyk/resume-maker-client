import { TestBed } from "@angular/core/testing";

import { ResumeLogicService } from "./resume-logic.service";
import { ResumeDatabaseService } from "../../database/service/resume-database.service";
import * as util from "../util/logic.util";
import { RESUME_0 } from "../../database/const/resume-database.const";

describe("Resume Logic Service", () => {
  let database: ResumeDatabaseService;
  let logic: ResumeLogicService;

  beforeEach(() => {
    database = TestBed.inject(ResumeDatabaseService);
    logic = TestBed.inject(ResumeLogicService);
  });

  it(util.messageSelect("resume", 0), () => util.testSelect(database, logic, 0, [
    { ...RESUME_0, metadata: { ...RESUME_0.metadata, isSelected: true } }
  ]));
});
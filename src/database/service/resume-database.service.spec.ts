import { TestBed } from "@angular/core/testing";

import { ResumeDatabaseService } from "./resume-database.service";
import * as util from "../util/database.util";
import { RESUME_0 } from "../const/resume-database.const";

describe("Resume Database Service", () => {
  let service: ResumeDatabaseService;

  beforeEach(() => {
    service = TestBed.inject(ResumeDatabaseService);
  });

  it(util.messageReadAll("resumes"), () => util.testReadAll(service, [RESUME_0]));

  it(util.messageReadById("resume", 0), () => util.testReadById(service, 0, RESUME_0));

  it(util.messageDelete("resume", 0), () => util.testDelete(service, 0, []));
});
import { TestBed } from "@angular/core/testing";

import { ResumeDatabaseService } from "./resume-database.service";
import { messageReadAll, testReadAll } from "../util/database.util";
import { RESUME_0 } from "../const/resume-database.const";

describe("Resume Database Service", () => {
  let service: ResumeDatabaseService;

  beforeEach(() => {
    service = TestBed.inject(ResumeDatabaseService);
  });

  it(messageReadAll("resumes"), () => testReadAll(service, [RESUME_0]));

  // it(messageReadById("resume", 0), () => testReadById(service, data, 0));

  // it(messageDelete("resume", 0), () => testDelete(service, data, 0));
});
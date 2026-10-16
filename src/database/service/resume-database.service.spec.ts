import { TestBed } from "@angular/core/testing";

import { ResumeDatabaseService } from "./resume-database.service";
import { messageDelete, testDelete, } from "../util/database.util";

describe("Resume Database Service", () => {
  const ids = [0];

  let service: ResumeDatabaseService;

  beforeEach(() => {
    service = TestBed.inject(ResumeDatabaseService);
  });

  it(messageDelete("resumes", ids), () => testDelete(service, ids));
});
import { TestBed } from "@angular/core/testing";

import { ResumeDatabaseService } from "./resume-database.service";
import { messageDelete, messageReadAll, testDelete, testReadAll, } from "../util/database.util";
import { ResumeDatabaseData } from "../data/resume-database.data";

describe("Resume Database Service", () => {
  const ids = [0];

  let service: ResumeDatabaseService;
  let data: ResumeDatabaseData;

  beforeEach(() => {
    service = TestBed.inject(ResumeDatabaseService);
    data = TestBed.inject(ResumeDatabaseData);
  });

  it(messageReadAll("resumes"), () => testReadAll(service, data));

  it(messageDelete("resumes", ids), () => testDelete(service, ids));
});
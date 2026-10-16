import { TestBed } from "@angular/core/testing";

import { ResumeDatabaseService } from "./resume-database.service";
import { ResumeDatabaseData } from "../data/resume-database.data";
import { messageDelete, messageReadAll, messageReadByIds, testDelete, testReadAll, testReadByIds } from "../util/database.util";

describe("Resume Database Service", () => {
  const ids = [0];

  let service: ResumeDatabaseService;
  let data: ResumeDatabaseData;

  beforeEach(() => {
    service = TestBed.inject(ResumeDatabaseService);
    data = TestBed.inject(ResumeDatabaseData);
  });

  it(messageReadAll("resumes"), () => testReadAll(service, data));
  
  it(messageReadByIds("resumes", ids), () => testReadByIds(service, data, ids));

  it(messageDelete("resumes", ids), () => testDelete(service, data, ids));
});
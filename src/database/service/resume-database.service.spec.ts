import { TestBed } from "@angular/core/testing";

import { ResumeDatabaseService } from "./resume-database.service";
import { ResumeDatabaseData } from "../data/resume-database.data";
import { messageDeleteItemsByIds, testDeleteItemsByIds } from "../util/database.util";

describe("Resume Database Service", () => {
  const ids = [0];

  let service: ResumeDatabaseService;
  let data: ResumeDatabaseData;

  beforeEach(() => {
    service = TestBed.inject(ResumeDatabaseService);
    data = TestBed.inject(ResumeDatabaseData);
  });

  it(messageDeleteItemsByIds("resumes", ids), () => testDeleteItemsByIds(ids, service, data));
});
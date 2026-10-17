import { TestBed } from "@angular/core/testing";

import { ExperienceDatabaseService } from "./experience-database.service";
import * as util from "../util/database.util";
import { EXPERIENCE_0, EXPERIENCE_1 } from "../const/experience-database.const";

describe("Experience Database Service", () => {
  let service: ExperienceDatabaseService;

  beforeEach(() => {
    service = TestBed.inject(ExperienceDatabaseService);
  });

  it(util.messageReadAll("experiences"), () => util.testReadAll(service, [EXPERIENCE_0, EXPERIENCE_1]));
  
  it(util.messageReadById("experience", 0), () => util.testReadById(service, 0, EXPERIENCE_0));
      
  it(util.messageReadByParentId("experiences", 0), () => util.testReadByParentId(service, 0, [EXPERIENCE_0, EXPERIENCE_1]));

  it(util.messageUpdate("experience", 0), () => {
    const EXPERIENCE_1_COPY = structuredClone(EXPERIENCE_1);
    EXPERIENCE_1_COPY.data.jobTitle = "Programmer";
    util.testUpdate(service, EXPERIENCE_1_COPY); 
  });

  it(util.messageDelete("experience", 1), () => util.testDelete(service, 1, [EXPERIENCE_0]));
});
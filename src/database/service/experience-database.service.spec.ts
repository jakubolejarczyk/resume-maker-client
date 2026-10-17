import { TestBed } from "@angular/core/testing";

import { ExperienceDatabaseService } from "./experience-database.service";
import { messageReadAll, testReadAll } from "../util/database.util";
import { EXPERIENCE_0, EXPERIENCE_1 } from "../const/experience-database.const";

describe("Experience Database Service", () => {
  let service: ExperienceDatabaseService;

  beforeEach(() => {
    service = TestBed.inject(ExperienceDatabaseService);
  });

  it(messageReadAll("experiences"), () => testReadAll(service, [EXPERIENCE_0, EXPERIENCE_1]));
  
  // it(messageReadById("experience", 0), () => testReadById(service, data, 0));

  // it(messageDelete("experience", 0), () => testDelete(service, data, 0));
});
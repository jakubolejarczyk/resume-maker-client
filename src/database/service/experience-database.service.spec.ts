import { TestBed } from "@angular/core/testing";

import { ExperienceDatabaseService } from "./experience-database.service";
import { messageDelete, messageReadAll, testDelete, testReadAll } from "../util/database.util";
import { EXPERIENCE_0, EXPERIENCE_1 } from "../const/experience-database.const";

describe("Experience Database Service", () => {
  let service: ExperienceDatabaseService;

  beforeEach(() => {
    service = TestBed.inject(ExperienceDatabaseService);
  });

  it(messageReadAll("experiences"), () => testReadAll(service, [EXPERIENCE_0, EXPERIENCE_1]));
  
  // it(messageReadById("experience", 0), () => testReadById(service, data, 0));

  it(messageDelete("experience", 1), () => testDelete(service, 1, [EXPERIENCE_0]));
});
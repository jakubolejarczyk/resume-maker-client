import { TestBed } from "@angular/core/testing";

import { EducationDatabaseService } from "./education-database.service";
import { messageReadAll, testReadAll } from "../util/database.util";
import { EDUCATION_0, EDUCATION_1 } from "../const/education-database.const";

describe("Education Database Service", () => {
  let service: EducationDatabaseService;

  beforeEach(() => {
    service = TestBed.inject(EducationDatabaseService);
  });

  it(messageReadAll("educations"), () => testReadAll(service, [EDUCATION_0, EDUCATION_1]));
    
  // it(messageReadById("education", 0), () => testReadById(service, data, 0));

  // it(messageDelete("education", 0), () => testDelete(service, data, 0));
});
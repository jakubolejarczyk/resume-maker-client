import { TestBed } from "@angular/core/testing";

import { EducationDatabaseService } from "./education-database.service";
import { EducationDatabaseData } from "../data/education-database.data";
import { messageDelete, messageReadAll, messageReadByIds, testDelete, testReadAll, testReadByIds } from "../util/database.util";

describe("Education Database Service", () => {
  const ids = [0, 1];

  let service: EducationDatabaseService;
  let data: EducationDatabaseData;

  beforeEach(() => {
    service = TestBed.inject(EducationDatabaseService);
    data = TestBed.inject(EducationDatabaseData);
  });

  it(messageReadAll("educations"), () => testReadAll(service, data));
  
  it(messageReadByIds("educations", ids), () => testReadByIds(service, data, ids));

  it(messageDelete("educations", ids), () => testDelete(service, data, ids));
});
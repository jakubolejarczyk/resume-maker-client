import { TestBed } from "@angular/core/testing";

import { EducationDatabaseService } from "./education-database.service";
import { messageDelete, messageReadAll, testDelete, testReadAll } from "../util/database.util";
import { EducationDatabaseData } from "../data/education-database.data";

describe("Education Database Service", () => {
  const ids = [0, 1];

  let service: EducationDatabaseService;
  let data: EducationDatabaseData;

  beforeEach(() => {
    service = TestBed.inject(EducationDatabaseService);
    data = TestBed.inject(EducationDatabaseData);
  });

  it(messageReadAll("education"), () => testReadAll(service, data));

  it(messageDelete("educations", ids), () => testDelete(service, ids));
});
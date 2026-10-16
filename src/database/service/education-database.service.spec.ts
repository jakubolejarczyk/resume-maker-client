import { TestBed } from "@angular/core/testing";

import { EducationDatabaseService } from "./education-database.service";
import { EducationDatabaseData } from "../data/education-database.data";
import { messageDeleteItemsByIds, testDeleteItemsByIds } from "../util/database.util";

describe("Education Database Service", () => {
  const ids = [0, 1];

  let service: EducationDatabaseService;
  let data: EducationDatabaseData;

  beforeEach(() => {
    service = TestBed.inject(EducationDatabaseService);
    data = TestBed.inject(EducationDatabaseData);
  });

  it(messageDeleteItemsByIds("educations", ids), () => testDeleteItemsByIds(ids, service, data));
});
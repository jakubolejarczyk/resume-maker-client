import { TestBed } from "@angular/core/testing";

import { EducationDatabaseService } from "./education-database.service";
import { messageDelete, testDelete } from "../util/database.util";

describe("Education Database Service", () => {
  const ids = [0, 1];

  let service: EducationDatabaseService;

  beforeEach(() => {
    service = TestBed.inject(EducationDatabaseService);
  });

  it(messageDelete("educations", ids), () => testDelete(service, ids));
});
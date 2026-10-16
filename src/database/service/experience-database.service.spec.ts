import { TestBed } from "@angular/core/testing";

import { ExperienceDatabaseService } from "./experience-database.service";
import { messageDelete, testDelete } from "../util/database.util";

describe("Experience Database Service", () => {
  const ids = [0, 1];

  let service: ExperienceDatabaseService;

  beforeEach(() => {
    service = TestBed.inject(ExperienceDatabaseService);
  });

  it(messageDelete("experiences", ids), () => testDelete(service, ids));
});
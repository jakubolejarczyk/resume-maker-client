import { TestBed } from "@angular/core/testing";

import { ExperienceDatabaseService } from "./experience-database.service";
import { ExperienceDatabaseData } from "../data/experience-database.data";
import { messageDeleteItemsByIds, testDeleteItemsByIds } from "../util/database.util";

describe("Experience Database Service", () => {
  const ids = [0, 1];

  let service: ExperienceDatabaseService;
  let data: ExperienceDatabaseData;

  beforeEach(() => {
    service = TestBed.inject(ExperienceDatabaseService);
    data = TestBed.inject(ExperienceDatabaseData);
  });

  it(messageDeleteItemsByIds("experiences", ids), () => testDeleteItemsByIds(ids, service, data));
});
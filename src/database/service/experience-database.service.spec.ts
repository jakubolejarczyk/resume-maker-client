import { TestBed } from "@angular/core/testing";

import { ExperienceDatabaseService } from "./experience-database.service";
import { messageDelete, messageReadAll, testDelete, testReadAll } from "../util/database.util";
import { ExperienceDatabaseData } from "../data/experience-database.data";

describe("Experience Database Service", () => {
  const ids = [0, 1];

  let service: ExperienceDatabaseService;
  let data: ExperienceDatabaseData;

  beforeEach(() => {
    service = TestBed.inject(ExperienceDatabaseService);
    data = TestBed.inject(ExperienceDatabaseData);
  });

  it(messageReadAll("experiences"), () => testReadAll(service, data));

  it(messageDelete("experiences", ids), () => testDelete(service, ids));
});
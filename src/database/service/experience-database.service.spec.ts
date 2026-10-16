import { TestBed } from "@angular/core/testing";

import { ExperienceDatabaseService } from "./experience-database.service";
import { ExperienceDatabaseData } from "../data/experience-database.data";
import { messageDelete, messageReadAll, messageReadByIds, testDelete, testReadAll, testReadByIds } from "../util/database.util";

describe("Experience Database Service", () => {
  const ids = [0, 1];

  let service: ExperienceDatabaseService;
  let data: ExperienceDatabaseData;

  beforeEach(() => {
    service = TestBed.inject(ExperienceDatabaseService);
    data = TestBed.inject(ExperienceDatabaseData);
  });

  it(messageReadAll("experiences"), () => testReadAll(service, data));
  
  it(messageReadByIds("experiences", ids), () => testReadByIds(service, data, ids));

  it(messageDelete("experiences", ids), () => testDelete(service, data, ids));
});
import { TestBed } from "@angular/core/testing";

import { SkillDatabaseService } from "./skill-database.service";
import { SkillDatabaseData } from "../data/skill-database.data";
import { messageDelete, messageReadAll, messageReadByIds, testDelete, testReadAll, testReadByIds } from "../util/database.util";

describe("Skill Database Service", () => {
  const ids = [0, 1];

  let service: SkillDatabaseService;
  let data: SkillDatabaseData;

  beforeEach(() => {
    service = TestBed.inject(SkillDatabaseService);
    data = TestBed.inject(SkillDatabaseData);
  });

  it(messageReadAll("skills"), () => testReadAll(service, data));
  
  it(messageReadByIds("skills", ids), () => testReadByIds(service, data, ids));

  it(messageDelete("skills", ids), () => testDelete(service, data, ids));
});
import { TestBed } from "@angular/core/testing";

import { SkillDatabaseService } from "./skill-database.service";
import { messageDelete, messageReadAll, testDelete, testReadAll } from "../util/database.util";
import { SkillDatabaseData } from "../data/skill-database.data";

describe("Skill Database Service", () => {
  const ids = [0, 1];

  let service: SkillDatabaseService;
  let data: SkillDatabaseData;

  beforeEach(() => {
    service = TestBed.inject(SkillDatabaseService);
    data = TestBed.inject(SkillDatabaseData);
  });

  it(messageReadAll("skills"), () => testReadAll(service, data));

  it(messageDelete("skills", ids), () => testDelete(service, ids));
});
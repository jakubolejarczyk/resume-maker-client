import { TestBed } from "@angular/core/testing";

import { SkillDatabaseService } from "./skill-database.service";
import { SkillDatabaseData } from "../data/skill-database.data";
import { messageDeleteItemsByIds, testDeleteItemsByIds } from "../util/database.util";

describe("Skill Database Service", () => {
  const ids = [0, 1];

  let service: SkillDatabaseService;
  let data: SkillDatabaseData;

  beforeEach(() => {
    service = TestBed.inject(SkillDatabaseService);
    data = TestBed.inject(SkillDatabaseData);
  });

  it(messageDeleteItemsByIds("skills", ids), () => testDeleteItemsByIds(ids, service, data));
});
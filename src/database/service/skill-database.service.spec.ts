import { TestBed } from "@angular/core/testing";

import { SkillDatabaseService } from "./skill-database.service";
import { messageDelete, testDelete } from "../util/database.util";

describe("Skill Database Service", () => {
  const ids = [0, 1];

  let service: SkillDatabaseService;

  beforeEach(() => {
    service = TestBed.inject(SkillDatabaseService);
  });

  it(messageDelete("skills", ids), () => testDelete(service, ids));
});
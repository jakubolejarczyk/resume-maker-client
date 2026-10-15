import { TestBed } from "@angular/core/testing";

import { SkillDatabaseService } from "./skill-database.service";
import { SkillDatabaseConst } from "../const/skill-database.const";
import { SkillDatabaseModel } from "../model/skill-database.model";

describe("Skill Database Service", () => {
  let service: SkillDatabaseService;

  beforeEach(() => {
    service = TestBed.inject(SkillDatabaseService);
  });

  it("Should correctly create new skills.", () => {
    service.nextId = 6;
    const SKILL_TEST_6: SkillDatabaseModel = {
      id: 6,
      order: 2,
      isSelected: false,
      hasParent: true,
      parentId: 1,
      category: "Programming Language",
      skills: ["Python", "Java", "C++"]
    };
    const SKILL_TEST_7: SkillDatabaseModel = {
      id: 7,
      order: 3,
      isSelected: false,
      hasParent: true,
      parentId: 1,
      category: "Web Development",
      skills: ["HTML", "CSS", "React", "Node.js"]
    };
    service.create([
      SKILL_TEST_6,
      SKILL_TEST_7
    ]);
    const received = service.readByIds([6, 7]);
    expect(received).toEqual([
      SKILL_TEST_6,
      SKILL_TEST_7
    ]);
  });

  it("Should correctly read skills by ids 0, 1.", () => {
    const ids = [0, 1];
    const received = service.readByIds(ids);
    expect(received).toEqual([
      SkillDatabaseConst.SKILL_PERSONAL_0,
      SkillDatabaseConst.SKILL_PERSONAL_1
    ]);
  });

  it("Should correctly read skills by parent ids 0, 1.", () => {
    const parentIds = [0, 1];
    const received = service.readByParentIds(parentIds);
    expect(received).toEqual([
      SkillDatabaseConst.SKILL_PERSONAL_0,
      SkillDatabaseConst.SKILL_PERSONAL_1,
      SkillDatabaseConst.SKILL_PERSONAL_2,
      SkillDatabaseConst.SKILL_PERSONAL_3,
      SkillDatabaseConst.SKILL_TEST_4,
      SkillDatabaseConst.SKILL_TEST_5
    ]);
  });

  it("Should correctly update skills with ids 0, 1.", () => {
    const ids = [0, 1];
    const receivedBefore = service.readByIds(ids);
    expect(receivedBefore).toEqual([
      SkillDatabaseConst.SKILL_PERSONAL_0,
      SkillDatabaseConst.SKILL_PERSONAL_1
    ]);
    const SKILL_PERSONAL_0_UPDATED = structuredClone(SkillDatabaseConst.SKILL_PERSONAL_0);
    const SKILL_PERSONAL_1_UPDATED = structuredClone(SkillDatabaseConst.SKILL_PERSONAL_1);
    SKILL_PERSONAL_0_UPDATED.category = "New category";
    SKILL_PERSONAL_1_UPDATED.category = "Animal";
    service.update([
      SKILL_PERSONAL_0_UPDATED,
      SKILL_PERSONAL_1_UPDATED
    ]);
    const receivedAfter = service.readByIds(ids);
    expect(receivedAfter).toEqual([
      SKILL_PERSONAL_0_UPDATED,
      SKILL_PERSONAL_1_UPDATED
    ]);
  });

  it("Should correctly delete skills by ids 0, 1.", () => {
    const ids = [0, 1];
    const receivedBefore = service.readByIds(ids);
    expect(receivedBefore).toEqual([
      SkillDatabaseConst.SKILL_PERSONAL_0,
      SkillDatabaseConst.SKILL_PERSONAL_1
    ]);
    service.delete(ids);
    const receivedAfter = service.readByIds(ids);
    expect(receivedAfter).toEqual([]);
  });
});
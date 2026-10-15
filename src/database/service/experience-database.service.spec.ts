import { TestBed } from "@angular/core/testing";

import { ExperienceDatabaseService } from "./experience-database.service";
import { ExperienceDatabaseConst } from "../const/experience-database.const";
import { ExperienceDatabaseModel } from "../model/experience-database.model";

describe("Experience Database Service", () => {
  let service: ExperienceDatabaseService;

  beforeEach(() => {
    service = TestBed.inject(ExperienceDatabaseService);
  });

  it("Should correctly create new experiences.", () => {
    service.nextId = 3;
    const EXPERIENCE_TEST_3: ExperienceDatabaseModel = {
        id: 3,
        order: 1,
        isSelected: false,
        hasParent: true,
        parentId: 1,
        company: "Google",
        jobTitle: "Frontend Developer",
        description: [
            "Developed responsive web applications using React and TypeScript.",
            "Collaborated with backend developers to integrate REST APIs.",
            "Improved application performance and maintained code quality through unit testing."
        ],
        startDate: "2018-06-01",
        endDate: "2020-06-30"
    };
    const EXPERIENCE_TEST_4: ExperienceDatabaseModel = {
        id: 4,
        order: 2,
        isSelected: false,
        hasParent: true,
        parentId: 1,
        company: "Microsoft",
        jobTitle: "Senior Software Engineer",
        description: [
            "Designed and developed scalable applications using Angular and .NET.",
            "Implemented REST APIs and optimized database queries.",
            "Mentored team members and improved development workflows through code reviews and automated testing."
        ],
        startDate: "2025-03-01",
        endDate: "2026-10-01"
    };
    service.create([
      EXPERIENCE_TEST_3,
      EXPERIENCE_TEST_4
    ]);
    const received = service.readByIds([3, 4]);
    expect(received).toEqual([
      EXPERIENCE_TEST_3,
      EXPERIENCE_TEST_4
    ]);
  });

  it("Should correctly read experiences by ids 0, 1.", () => {
    const ids = [0, 1];
    const received = service.readByIds(ids);
    expect(received).toEqual([
      ExperienceDatabaseConst.EXPERIENCE_PERSONAL_0,
      ExperienceDatabaseConst.EXPERIENCE_PERSONAL_1
    ]);
  });

  it("Should correctly read experiences by parent ids 0, 1.", () => {
    const parentIds = [0, 1];
    const received = service.readByParentIds(parentIds);
    expect(received).toEqual([
      ExperienceDatabaseConst.EXPERIENCE_PERSONAL_0,
      ExperienceDatabaseConst.EXPERIENCE_PERSONAL_1,
      ExperienceDatabaseConst.EXPERIENCE_TEST_2
    ]);
  });

  it("Should correctly update experiences with ids 0, 1.", () => {
    const ids = [0, 1];
    const receivedBefore = service.readByIds(ids);
    expect(receivedBefore).toEqual([
      ExperienceDatabaseConst.EXPERIENCE_PERSONAL_0,
      ExperienceDatabaseConst.EXPERIENCE_PERSONAL_1
    ]);
    const EXPERIENCE_PERSONAL_0_UPDATED = structuredClone(ExperienceDatabaseConst.EXPERIENCE_PERSONAL_0);
    const EXPERIENCE_PERSONAL_1_UPDATED = structuredClone(ExperienceDatabaseConst.EXPERIENCE_PERSONAL_1);
    EXPERIENCE_PERSONAL_0_UPDATED.jobTitle = "Teacher";
    EXPERIENCE_PERSONAL_1_UPDATED.company = "Google";
    service.update([
      EXPERIENCE_PERSONAL_0_UPDATED,
      EXPERIENCE_PERSONAL_1_UPDATED
    ]);
    const receivedAfter = service.readByIds(ids);
    expect(receivedAfter).toEqual([
      EXPERIENCE_PERSONAL_0_UPDATED,
      EXPERIENCE_PERSONAL_1_UPDATED
    ]);
  });

  it("Should correctly delete educations by ids 0, 1.", () => {
    const ids = [0, 1];
    const receivedBefore = service.readByIds(ids);
    expect(receivedBefore).toEqual([
      ExperienceDatabaseConst.EXPERIENCE_PERSONAL_0,
      ExperienceDatabaseConst.EXPERIENCE_PERSONAL_1
    ]);
    service.delete(ids);
    const receivedAfter = service.readByIds(ids);
    expect(receivedAfter).toEqual([]);
  });
});
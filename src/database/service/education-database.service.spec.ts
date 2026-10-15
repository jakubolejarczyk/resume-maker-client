import { TestBed } from "@angular/core/testing";

import { EducationDatabaseService } from "./education-database.service";
import { EducationDatabaseConst } from "../const/education-database.const";
import { EducationDatabaseModel } from "../model/education-database.model";

describe("Education Database Service", () => {
  let service: EducationDatabaseService;

  beforeEach(() => {
    service = TestBed.inject(EducationDatabaseService);
  });

  it("Should correctly create new educations.", () => {
    service.nextId = 3;
    const EDUCATION_TEST_3: EducationDatabaseModel = {
        id: 3,
        order: 1,
        isSelected: false,
        hasParent: true,
        parentId: 1,
        institutionName: "University of Warsaw",
        fieldOfStudy: "Mathematics",
        degree: "Bachelor of Science",
        startYear: 2015,
        endYear: 2018
    };
    const EDUCATION_TEST_4: EducationDatabaseModel = {
        id: 4,
        order: 2,
        isSelected: false,
        hasParent: true,
        parentId: 1,
        institutionName: "Warsaw University of Technology",
        fieldOfStudy: "Computer Science",
        degree: "Master of Science",
        startYear: 2018,
        endYear: 2020
    };
    service.create([
      EDUCATION_TEST_3,
      EDUCATION_TEST_4
    ]);
    const received = service.readByIds([3, 4]);
    expect(received).toEqual([
      EDUCATION_TEST_3,
      EDUCATION_TEST_4
    ]);
  });

  it("Should correctly read educations by ids 0, 1.", () => {
    const ids = [0, 1];
    const received = service.readByIds(ids);
    expect(received).toEqual([
      EducationDatabaseConst.EDUCATION_PERSONAL_0,
      EducationDatabaseConst.EDUCATION_PERSONAL_1
    ]);
  });

  it("Should correctly read educations by parent ids 0, 1.", () => {
    const parentIds = [0, 1];
    const received = service.readByParentIds(parentIds);
    expect(received).toEqual([
      EducationDatabaseConst.EDUCATION_PERSONAL_0,
      EducationDatabaseConst.EDUCATION_PERSONAL_1,
      EducationDatabaseConst.EDUCATION_TEST_2
    ]);
  });

  it("Should correctly update educations with ids 0, 1.", () => {
    const ids = [0, 1];
    const receivedBefore = service.readByIds(ids);
    expect(receivedBefore).toEqual([
      EducationDatabaseConst.EDUCATION_PERSONAL_0,
      EducationDatabaseConst.EDUCATION_PERSONAL_1
    ]);
    const EDUCATION_PERSONAL_0_UPDATED = structuredClone(EducationDatabaseConst.EDUCATION_PERSONAL_0);
    const EDUCATION_PERSONAL_1_UPDATED = structuredClone(EducationDatabaseConst.EDUCATION_PERSONAL_1);
    EDUCATION_PERSONAL_0_UPDATED.institutionName = "University of Oxford";
    EDUCATION_PERSONAL_1_UPDATED.startYear = 2026;
    service.update([
      EDUCATION_PERSONAL_0_UPDATED,
      EDUCATION_PERSONAL_1_UPDATED
    ]);
    const receivedAfter = service.readByIds(ids);
    expect(receivedAfter).toEqual([
      EDUCATION_PERSONAL_0_UPDATED,
      EDUCATION_PERSONAL_1_UPDATED
    ]);
  });

  it("Should correctly delete educations by ids 0, 1.", () => {
    const ids = [0, 1];
    const receivedBefore = service.readByIds(ids);
    expect(receivedBefore).toEqual([
      EducationDatabaseConst.EDUCATION_PERSONAL_0,
      EducationDatabaseConst.EDUCATION_PERSONAL_1
    ]);
    service.delete(ids);
    const receivedAfter = service.readByIds(ids);
    expect(receivedAfter).toEqual([]);
  });
});
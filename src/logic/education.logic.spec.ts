import { TestBed } from "@angular/core/testing";

import { EducationLogic } from "./education.logic";
import { EducationDatabaseConst } from "../database/const/education-database.const";
import { EducationDatabaseService } from "../database/service/education-database.service";

describe("Education Logic", () => {
  let database: EducationDatabaseService;
  let logic: EducationLogic;

  beforeEach(() => {
    database = TestBed.inject(EducationDatabaseService);
    logic = TestBed.inject(EducationLogic);
  });

  it("Should correctly select education with id 0.", () => {
    const idToUpdate = 0;
    const ids = [idToUpdate, 1];
    const receivedBefore = database.readByIds(ids);
    expect(receivedBefore).toEqual([
      EducationDatabaseConst.EDUCATION_PERSONAL_0,
      EducationDatabaseConst.EDUCATION_PERSONAL_1
    ]);
    logic.select([idToUpdate]);
    const receivedAfter = database.readByIds(ids);
    expect(receivedAfter).toEqual([
      { ...EducationDatabaseConst.EDUCATION_PERSONAL_0, isSelected: true },
      EducationDatabaseConst.EDUCATION_PERSONAL_1
    ]);
  });
  
  it("Should correctly select educations with ids 0, 1.", () => {
    const ids = [0, 1];
    const receivedBefore = database.readByIds(ids);
    expect(receivedBefore).toEqual([
      EducationDatabaseConst.EDUCATION_PERSONAL_0,
      EducationDatabaseConst.EDUCATION_PERSONAL_1
    ]);
    logic.select(ids);
    const receivedAfter = database.readByIds(ids);
    expect(receivedAfter).toEqual([
      { ...EducationDatabaseConst.EDUCATION_PERSONAL_0, isSelected: true },
      { ...EducationDatabaseConst.EDUCATION_PERSONAL_1, isSelected: true }
    ]);
  });
});
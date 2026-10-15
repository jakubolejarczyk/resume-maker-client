import { TestBed } from "@angular/core/testing";

import { EducationLogicService } from "./education-logic.service";
import { EducationDatabaseConst } from "../../database/const/education-database.const";
import { EducationDatabaseService } from "../../database/service/education-database.service";

describe("Education Logic", () => {
  let database: EducationDatabaseService;
  let logic: EducationLogicService;

  beforeEach(() => {
    database = TestBed.inject(EducationDatabaseService);
    logic = TestBed.inject(EducationLogicService);
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

  it("Should correctly deselect education with id 0.", () => {
    const ids = [0, 1];
    const receivedBase = database.readByIds(ids);
    expect(receivedBase).toEqual([
      EducationDatabaseConst.EDUCATION_PERSONAL_0,
      EducationDatabaseConst.EDUCATION_PERSONAL_1
    ]);
    logic.select(ids);
    const receivedBefore = database.readByIds(ids);
    expect(receivedBefore).toEqual([
      { ...EducationDatabaseConst.EDUCATION_PERSONAL_0, isSelected: true },
      { ...EducationDatabaseConst.EDUCATION_PERSONAL_1, isSelected: true }
    ]);
    logic.deselect([ids[0]]);
    const receivedAfter = database.readByIds(ids);
    expect(receivedAfter).toEqual([
      EducationDatabaseConst.EDUCATION_PERSONAL_0,
      { ...EducationDatabaseConst.EDUCATION_PERSONAL_1, isSelected: true }
    ]);
  });

  it("Should correctly deselect educations with ids 0, 1.", () => {
    const ids = [0, 1];
    const receivedBase = database.readByIds(ids);
    expect(receivedBase).toEqual([
      EducationDatabaseConst.EDUCATION_PERSONAL_0,
      EducationDatabaseConst.EDUCATION_PERSONAL_1
    ]);
    logic.select(ids);
    const receivedBefore = database.readByIds(ids);
    expect(receivedBefore).toEqual([
      { ...EducationDatabaseConst.EDUCATION_PERSONAL_0, isSelected: true },
      { ...EducationDatabaseConst.EDUCATION_PERSONAL_1, isSelected: true }
    ]);
    logic.deselect(ids);
    const receivedAfter = database.readByIds(ids);
    expect(receivedAfter).toEqual([
      EducationDatabaseConst.EDUCATION_PERSONAL_0,
      EducationDatabaseConst.EDUCATION_PERSONAL_1
    ]);
  });
});
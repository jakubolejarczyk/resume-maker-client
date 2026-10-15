import { TestBed } from "@angular/core/testing";

import { ResumeDatabaseService } from "./resume-database.service";
import { ResumeDatabaseConst } from "../const/resume-database.const";
import { ResumeDatabaseModel } from "../model/resume-database.model";

describe("Resume Database Service", () => {
  let service: ResumeDatabaseService;

  beforeEach(() => {
    service = TestBed.inject(ResumeDatabaseService);
  });

  it("Should correctly create new resumes.", () => {
    service.nextId = 2;
    const RESUME_TEST_2: ResumeDatabaseModel = {
      id: 2,
      order: 1,
      parentId: 1,
      name: "Resume Temporary 1"
    };
    const RESUME_TEST_3: ResumeDatabaseModel = {
      id: 3,
      order: 2,
      parentId: 1,
      name: "Resume Temporary 2"
    };
    service.create([
      RESUME_TEST_2,
      RESUME_TEST_3
    ]);
    const received = service.readByIds([2, 3]);
    expect(received).toEqual([
      RESUME_TEST_2,
      RESUME_TEST_3
    ]);
  });

  it("Should correctly read resumes by ids 0, 1.", () => {
    const ids = [0, 1];
    const received = service.readByIds(ids);
    expect(received).toEqual([
      ResumeDatabaseConst.RESUME_PERSONAL_0,
      ResumeDatabaseConst.RESUME_TEST_1
    ]);
  });

  it("Should correctly read resumes by parent ids 0, 1.", () => {
    const parentIds = [0, 1];
    const received = service.readByParentIds(parentIds);
    expect(received).toEqual([
      ResumeDatabaseConst.RESUME_PERSONAL_0,
      ResumeDatabaseConst.RESUME_TEST_1
    ]);
  });

  it("Should correctly update resumes with ids 0, 1.", () => {
    const ids = [0, 1];
    const receivedBefore = service.readByIds(ids);
    expect(receivedBefore).toEqual([
      ResumeDatabaseConst.RESUME_PERSONAL_0,
      ResumeDatabaseConst.RESUME_TEST_1
    ]);
    const RESUME_PERSONAL_0_UPDATED = structuredClone(ResumeDatabaseConst.RESUME_PERSONAL_0);
    const RESUME_TEST_1_UPDATED = structuredClone(ResumeDatabaseConst.RESUME_TEST_1);
    RESUME_PERSONAL_0_UPDATED.name = "My super resume";
    RESUME_TEST_1_UPDATED.name = "The best resume";
    service.update([
      RESUME_PERSONAL_0_UPDATED,
      RESUME_TEST_1_UPDATED
    ]);
    const receivedAfter = service.readByIds(ids);
    expect(receivedAfter).toEqual([
      RESUME_PERSONAL_0_UPDATED,
      RESUME_TEST_1_UPDATED
    ]);
  });

  it("Should correctly delete resumes by ids 0, 1.", () => {
    const ids = [0, 1];
    const receivedBefore = service.readByIds(ids);
    expect(receivedBefore).toEqual([
      ResumeDatabaseConst.RESUME_PERSONAL_0,
      ResumeDatabaseConst.RESUME_TEST_1
    ]);
    service.delete(ids);
    const receivedAfter = service.readByIds(ids);
    expect(receivedAfter).toEqual([]);
  });
});
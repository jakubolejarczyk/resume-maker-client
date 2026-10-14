import { provideStore, Store } from "@ngxs/store";
import { TestBed } from "@angular/core/testing";
import { switchMap, tap } from "rxjs";

import { ResumeMockService } from "./resume-mock.service";
import { ResumeStoreDatabaseMockState } from "../database/store/state/resume-store-database-mock.state";
import { SkillStoreDatabaseMockState } from "../database/store/state/skill-store-database-mock.state";
import { ExperienceStoreDatabaseMockState } from "../database/store/state/experience-store-database-mock.state";
import { EducationStoreDatabaseMockState } from "../database/store/state/education-store-database-mock.state";

describe("Resume Mock Service", () => {
  let store: Store;
  let service: ResumeMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore([
          EducationStoreDatabaseMockState,
          ExperienceStoreDatabaseMockState,
          SkillStoreDatabaseMockState,
          ResumeStoreDatabaseMockState
        ])
      ]
    });
    store = TestBed.inject(Store);
    service = TestBed.inject(ResumeMockService);
  });

  it("Should correctly delete the resume with id 0.", () => {
    service.delete([0]).pipe(
      switchMap(() => store.select(EducationStoreDatabaseMockState.getEducations)),
      tap((educations) => expect(educations).toEqual([])),
      switchMap(() => store.select(ExperienceStoreDatabaseMockState.getExperiences)),
      tap((experiences) => expect(experiences).toEqual([])),
      switchMap(() => store.select(SkillStoreDatabaseMockState.getSkills)),
      tap((skills) => expect(skills).toEqual([])),
      switchMap(() => store.select(ResumeStoreDatabaseMockState.getResumes)),
      tap((resumes) => expect(resumes).toEqual([]))
    ).subscribe();
  });
});
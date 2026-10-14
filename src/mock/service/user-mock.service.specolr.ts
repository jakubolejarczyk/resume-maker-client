import { provideStore, Store } from "@ngxs/store";
import { TestBed } from "@angular/core/testing";
import { switchMap, tap } from "rxjs";

import { UserMockService } from "./user-mock.service";
import { UserStoreDatabaseMockState } from "../database/store/state/user-store-database-mock.state";
import { EducationStoreDatabaseMockState } from "../database/store/state/education-store-database-mock.state";
import { ExperienceStoreDatabaseMockState } from "../database/store/state/experience-store-database-mock.state";
import { ResumeStoreDatabaseMockState } from "../database/store/state/resume-store-database-mock.state";
import { SkillStoreDatabaseMockState } from "../database/store/state/skill-store-database-mock.state";

describe("User Mock Service", () => {
  let store: Store;
  let service: UserMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore([
          EducationStoreDatabaseMockState,
          ExperienceStoreDatabaseMockState,
          SkillStoreDatabaseMockState,
          ResumeStoreDatabaseMockState,
          UserStoreDatabaseMockState
        ])
      ]
    });
    store = TestBed.inject(Store);
    service = TestBed.inject(UserMockService);
  });

  it("Should correctly delete the user with id equal to 0.", () => {
    service.delete([0]).pipe(
      switchMap(() => store.select(EducationStoreDatabaseMockState.getEducations)),
      tap((educations) => expect(educations).toEqual([])),
      // switchMap(() => store.select(ExperienceStoreDatabaseMockState.getExperiences)),
      // tap((experiences) => expect(experiences).toEqual([])),
      // switchMap(() => store.select(SkillStoreDatabaseMockState.getSkills)),
      // tap((skills) => expect(skills).toEqual([])),
      // switchMap(() => store.select(ResumeStoreDatabaseMockState.getResumes)),
      // tap((resumes) => expect(resumes).toEqual([])),
      // switchMap(() => store.select(UserStoreDatabaseMockState.getUsers)),
      // tap((users) => expect(users).toEqual([]))
    ).subscribe();
  });
});
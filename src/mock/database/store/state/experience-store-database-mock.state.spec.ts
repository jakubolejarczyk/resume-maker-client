import { provideStore, Store } from "@ngxs/store";
import { TestBed } from "@angular/core/testing";
import { switchMap, tap } from "rxjs";

import { ExperienceStoreDatabaseMockState } from "./experience-store-database-mock.state";
import { ExperienceStoreDatabaseMockAction } from "../action/experience-store-database-mock.action";
import { EXPERIENCE_1 } from "../../const/experience-database-mock.const";

describe("Experiences Database Mock Store", () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore([ExperienceStoreDatabaseMockState])
      ]
    });
    store = TestBed.inject(Store);
  });

  it("Should correctly delete the experience with id equal to 0.", () => {
    store.dispatch(new ExperienceStoreDatabaseMockAction.DeleteByIds([0])).pipe(
      switchMap(() => store.select(ExperienceStoreDatabaseMockState.getExperiences)),
      tap((experiences) => expect(experiences).toEqual([EXPERIENCE_1]))
    ).subscribe();
  });

  it("Should correctly delete experiences with resume id equal to 0.", () => {
    store.dispatch(new ExperienceStoreDatabaseMockAction.DeleteByResumeIds([0])).pipe(
      switchMap(() => store.select(ExperienceStoreDatabaseMockState.getExperiences)),
      tap((experiences) => expect(experiences).toEqual([]))
    ).subscribe();
  });
});
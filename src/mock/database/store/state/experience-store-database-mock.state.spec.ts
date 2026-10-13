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

  it("Should correctly delete the experiences with id 0.", () => {
    store.dispatch(new ExperienceStoreDatabaseMockAction.Delete(0)).pipe(
      switchMap(() => store.select(ExperienceStoreDatabaseMockState.getExperiences)),
      tap((users) => expect(users).toEqual([EXPERIENCE_1]))
    ).subscribe();
  });
});
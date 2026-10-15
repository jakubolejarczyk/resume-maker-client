import { provideStore, Store } from "@ngxs/store";
import { TestBed } from "@angular/core/testing";
import { switchMap, tap } from "rxjs";

import { ExperienceMockService } from "./experience-mock.service";
import { ExperienceStoreDatabaseMockState } from "../database/store/state/experience-store-database-mock.state";
import { ExperienceDatabaseMockConst } from "../database/const/experience-database-mock.const";

describe("Experience Mock Service", () => {
  let store: Store;
  let service: ExperienceMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore([
          ExperienceStoreDatabaseMockState
        ])
      ]
    });
    store = TestBed.inject(Store);
    service = TestBed.inject(ExperienceMockService);
  });

  it("Should correctly delete the experience with id equal to 0.", () => {
    service.delete([0]).pipe(
      switchMap(() => store.select(ExperienceStoreDatabaseMockState.getItems)),
      tap((items) => expect(items).toEqual([
        { ...ExperienceDatabaseMockConst.EXPERIENCE_PERSONAL_1, order: 0 },
        ExperienceDatabaseMockConst.EXPERIENCE_TEST_2
      ]))
    ).subscribe();
  });
});
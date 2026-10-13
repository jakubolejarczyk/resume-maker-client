import { provideStore, Store } from "@ngxs/store";
import { TestBed } from "@angular/core/testing";
import { switchMap, tap } from "rxjs";

import { EducationStoreDatabaseMockState } from "./education-store-database-mock.state";
import { EducationStoreDatabaseMockAction } from "../action/education-store-database-mock.action";
import { EDUCATION_1 } from "../../const/education-database-mock.const";

describe("Education Database Mock Store", () => {
    let store: Store;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          provideStore([EducationStoreDatabaseMockState])
        ]
      });
      store = TestBed.inject(Store);
    });

    it("Should correctly delete the education with id 0.", () => {
      store.dispatch(new EducationStoreDatabaseMockAction.Delete(0)).pipe(
        switchMap(() => store.select(EducationStoreDatabaseMockState.getEducations)),
        tap((users) => expect(users).toEqual([EDUCATION_1]))
      ).subscribe();
    });
});
import { provideStore, Store } from "@ngxs/store";
import { TestBed } from "@angular/core/testing";
import { switchMap, tap } from "rxjs";

import { EducationStoreDatabaseMockState } from "./education-store-database-mock.state";
import { EducationStoreDatabaseMockAction } from "../action/education-store-database-mock.action";
import { EducationDatabaseMockConst } from "../../const/education-database-mock.const";

describe("Education Database Mock State", () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore([
          EducationStoreDatabaseMockState
        ])
      ]
    });
    store = TestBed.inject(Store);
  });

  it("Should correctly delete the education with id equal to 0.", () => {
    store.dispatch(new EducationStoreDatabaseMockAction.DeleteByIds([0])).pipe(
      switchMap(() => store.select(EducationStoreDatabaseMockState.getItems)),
      tap((items) => expect(items).toEqual([
        { ...EducationDatabaseMockConst.EDUCATION_PERSONAL_1, order: 0 },
        EducationDatabaseMockConst.EDUCATION_TEST_2
      ]))
    ).subscribe();
  });

  it("Should delete educations with parent id equal to 0.", () => {
    store.dispatch(new EducationStoreDatabaseMockAction.DeleteByParentIds([0])).pipe(
      switchMap(() => store.select(EducationStoreDatabaseMockState.getItems)),
      tap((items) => expect(items).toEqual([
        EducationDatabaseMockConst.EDUCATION_TEST_2
      ]))
    ).subscribe();
  });
});
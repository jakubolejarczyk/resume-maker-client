import { provideStore, Store } from "@ngxs/store";
import { TestBed } from "@angular/core/testing";
import { switchMap, tap } from "rxjs";

import { UserStoreDatabaseMockState } from "./user-store-database-mock.state";
import { UserStoreDatabaseMockAction } from "../action/user-store-database-mock.action";

describe("User Database Mock Store", () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore([UserStoreDatabaseMockState])
      ]
    });
    store = TestBed.inject(Store);
  });

  it("Should correctly delete the user with id 0.", () => {
    store.dispatch(new UserStoreDatabaseMockAction.DeleteByIds([0])).pipe(
      switchMap(() => store.select(UserStoreDatabaseMockState.getUsers)),
      tap((users) => expect(users).toEqual([]))
    ).subscribe();
  });
});
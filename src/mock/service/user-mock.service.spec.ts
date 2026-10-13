import { provideStore, Store } from "@ngxs/store";
import { TestBed } from "@angular/core/testing";
import { switchMap, tap } from "rxjs";

import { UserMockService } from "./user-mock.service";
import { UserStoreDatabaseMockState } from "../database/store/state/user-store-database-mock.state";

describe("User Mock Service", () => {
  let store: Store;
  let service: UserMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore([UserStoreDatabaseMockState])
      ]
    });
    store = TestBed.inject(Store);
    service = TestBed.inject(UserMockService);
  });

  it("Should correctly delete the user with id 0.", () => {
    service.delete(0).pipe(
      switchMap(() => store.select(UserStoreDatabaseMockState.getUsers)),
      tap((users) => expect(users).toEqual([]))
    ).subscribe();
  });
});
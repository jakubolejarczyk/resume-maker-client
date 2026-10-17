import { provideStore, Store } from '@ngxs/store';
import { TestBed } from '@angular/core/testing';
import { switchMap, tap } from 'rxjs';

import { UserStoreDatabaseMockState } from './user-store-database-mock.state';
import { UserStoreDatabaseMockAction } from '../action/user-store-database-mock.action';
import { UserDatabaseMockConst } from '../../const/user-database-mock.const';

describe('User Database Mock State', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideStore([UserStoreDatabaseMockState])],
    });
    store = TestBed.inject(Store);
  });

  it('Should correctly delete the user with id equal to 0.', () => {
    store
      .dispatch(new UserStoreDatabaseMockAction.DeleteByIds([0]))
      .pipe(
        switchMap(() => store.select(UserStoreDatabaseMockState.getItems)),
        tap((items) =>
          expect(items).toEqual([
            { ...UserDatabaseMockConst.USER_TEST_1, order: 0 },
          ]),
        ),
      )
      .subscribe();
  });

  it('Should not delete users with parent id equal to 0 because it is not defined.', () => {
    store
      .dispatch(new UserStoreDatabaseMockAction.DeleteByParentIds([0]))
      .pipe(
        switchMap(() => store.select(UserStoreDatabaseMockState.getItems)),
        tap((items) =>
          expect(items).toEqual([
            UserDatabaseMockConst.USER_PERSONAL_0,
            UserDatabaseMockConst.USER_TEST_1,
          ]),
        ),
      )
      .subscribe();
  });
});

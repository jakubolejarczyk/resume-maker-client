import { provideStore, Store } from '@ngxs/store';
import { TestBed } from '@angular/core/testing';
import { switchMap, tap } from 'rxjs';

import { ExperienceStoreDatabaseMockState } from './experience-store-database-mock.state';
import { ExperienceStoreDatabaseMockAction } from '../action/experience-store-database-mock.action';
import { ExperienceDatabaseMockConst } from '../../const/experience-database-mock.const';

describe('Experience Database Mock State', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideStore([ExperienceStoreDatabaseMockState])],
    });
    store = TestBed.inject(Store);
  });

  it('Should correctly delete the experience with id equal to 0.', () => {
    store
      .dispatch(new ExperienceStoreDatabaseMockAction.DeleteByIds([0]))
      .pipe(
        switchMap(() =>
          store.select(ExperienceStoreDatabaseMockState.getItems),
        ),
        tap((items) =>
          expect(items).toEqual([
            { ...ExperienceDatabaseMockConst.EXPERIENCE_PERSONAL_1, order: 0 },
            ExperienceDatabaseMockConst.EXPERIENCE_TEST_2,
          ]),
        ),
      )
      .subscribe();
  });

  it('Should delete experiences with parent id equal to 0.', () => {
    store
      .dispatch(new ExperienceStoreDatabaseMockAction.DeleteByParentIds([0]))
      .pipe(
        switchMap(() =>
          store.select(ExperienceStoreDatabaseMockState.getItems),
        ),
        tap((items) =>
          expect(items).toEqual([
            ExperienceDatabaseMockConst.EXPERIENCE_TEST_2,
          ]),
        ),
      )
      .subscribe();
  });
});

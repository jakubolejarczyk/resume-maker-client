import { provideStore, Store } from '@ngxs/store';
import { TestBed } from '@angular/core/testing';
import { switchMap, tap } from 'rxjs';

import { EducationMockService } from './education-mock.service';
import { EducationStoreDatabaseMockState } from '../database/store/state/education-store-database-mock.state';
import { EducationDatabaseMockConst } from '../database/const/education-database-mock.const';

describe('Education Mock Service', () => {
  let store: Store;
  let service: EducationMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideStore([EducationStoreDatabaseMockState])],
    });
    store = TestBed.inject(Store);
    service = TestBed.inject(EducationMockService);
  });

  it('Should correctly delete the education with id equal to 0.', () => {
    service
      .delete([0])
      .pipe(
        switchMap(() => store.select(EducationStoreDatabaseMockState.getItems)),
        tap((items) =>
          expect(items).toEqual([
            { ...EducationDatabaseMockConst.EDUCATION_PERSONAL_1, order: 0 },
            EducationDatabaseMockConst.EDUCATION_TEST_2,
          ]),
        ),
      )
      .subscribe();
  });
});

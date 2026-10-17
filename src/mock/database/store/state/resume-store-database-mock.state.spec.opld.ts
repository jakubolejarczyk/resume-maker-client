import { provideStore, Store } from '@ngxs/store';
import { TestBed } from '@angular/core/testing';
import { switchMap, tap } from 'rxjs';

import { ResumeStoreDatabaseMockState } from './resume-store-database-mock.state';
import { ResumeStoreDatabaseMockAction } from '../action/resume-store-database-mock.action';
import { ResumeDatabaseMockConst } from '../../const/resume-database-mock.const';

describe('Resume Database Mock State', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideStore([ResumeStoreDatabaseMockState])],
    });
    store = TestBed.inject(Store);
  });

  it('Should correctly delete the resume with id equal to 0.', () => {
    store
      .dispatch(new ResumeStoreDatabaseMockAction.DeleteByIds([0]))
      .pipe(
        switchMap(() => store.select(ResumeStoreDatabaseMockState.getItems)),
        tap((items) =>
          expect(items).toEqual([ResumeDatabaseMockConst.RESUME_TEST_1]),
        ),
      )
      .subscribe();
  });

  it('Should delete resumes with parent id equal to 0.', () => {
    store
      .dispatch(new ResumeStoreDatabaseMockAction.DeleteByParentIds([0]))
      .pipe(
        switchMap(() => store.select(ResumeStoreDatabaseMockState.getItems)),
        tap((items) =>
          expect(items).toEqual([ResumeDatabaseMockConst.RESUME_TEST_1]),
        ),
      )
      .subscribe();
  });
});

import { provideStore, Store } from '@ngxs/store';
import { TestBed } from '@angular/core/testing';
import { switchMap, tap } from 'rxjs';

import { UserMockService } from './user-mock.service';
import { ResumeStoreDatabaseMockState } from '../database/store/state/resume-store-database-mock.state';
import { ResumeDatabaseMockConst } from '../database/const/resume-database-mock.const';
import { EducationStoreDatabaseMockState } from '../database/store/state/education-store-database-mock.state';
import { ExperienceStoreDatabaseMockState } from '../database/store/state/experience-store-database-mock.state';
import { SkillStoreDatabaseMockState } from '../database/store/state/skill-store-database-mock.state';
import { EducationDatabaseMockConst } from '../database/const/education-database-mock.const';
import { ExperienceDatabaseMockConst } from '../database/const/experience-database-mock.const';
import { SkillDatabaseMockConst } from '../database/const/skill-database-mock.const';
import { UserStoreDatabaseMockState } from '../database/store/state/user-store-database-mock.state';
import { UserDatabaseMockConst } from '../database/const/user-database-mock.const';

describe('User Mock Service', () => {
  let store: Store;
  let service: UserMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore([
          EducationStoreDatabaseMockState,
          ExperienceStoreDatabaseMockState,
          ResumeStoreDatabaseMockState,
          SkillStoreDatabaseMockState,
          UserStoreDatabaseMockState,
        ]),
      ],
    });
    store = TestBed.inject(Store);
    service = TestBed.inject(UserMockService);
  });

  it('Should correctly delete the user with id equal to 0 and all children.', () => {
    service
      .delete([0])
      .pipe(
        switchMap(() => store.select(EducationStoreDatabaseMockState.getItems)),
        tap((items) =>
          expect(items).toEqual([EducationDatabaseMockConst.EDUCATION_TEST_2]),
        ),
        switchMap(() =>
          store.select(ExperienceStoreDatabaseMockState.getItems),
        ),
        tap((items) =>
          expect(items).toEqual([
            ExperienceDatabaseMockConst.EXPERIENCE_TEST_2,
          ]),
        ),
        switchMap(() => store.select(SkillStoreDatabaseMockState.getItems)),
        tap((items) =>
          expect(items).toEqual([
            SkillDatabaseMockConst.SKILL_TEST_4,
            SkillDatabaseMockConst.SKILL_TEST_5,
          ]),
        ),
        switchMap(() => store.select(ResumeStoreDatabaseMockState.getItems)),
        tap((items) =>
          expect(items).toEqual([ResumeDatabaseMockConst.RESUME_TEST_1]),
        ),
        switchMap(() => store.select(UserStoreDatabaseMockState.getItems)),
        tap((items) =>
          expect(items).toEqual([
            { ...UserDatabaseMockConst.USER_TEST_1, order: 0 },
          ]),
        ),
      )
      .subscribe();
  });
});

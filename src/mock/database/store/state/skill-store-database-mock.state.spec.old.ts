import { provideStore, Store } from '@ngxs/store';
import { TestBed } from '@angular/core/testing';
import { switchMap, tap } from 'rxjs';

import { SkillStoreDatabaseMockState } from './skill-store-database-mock.state';
import { SkillStoreDatabaseMockAction } from '../action/skill-store-database-mock.action';
import { SkillDatabaseMockConst } from '../../const/skill-database-mock.const';

describe('Skill Database Mock State', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideStore([SkillStoreDatabaseMockState])],
    });
    store = TestBed.inject(Store);
  });

  it('Should correctly delete the skill with id equal to 0.', () => {
    store
      .dispatch(new SkillStoreDatabaseMockAction.DeleteByIds([0]))
      .pipe(
        switchMap(() => store.select(SkillStoreDatabaseMockState.getItems)),
        tap((items) =>
          expect(items).toEqual([
            { ...SkillDatabaseMockConst.SKILL_PERSONAL_1, order: 0 },
            { ...SkillDatabaseMockConst.SKILL_PERSONAL_2, order: 1 },
            { ...SkillDatabaseMockConst.SKILL_PERSONAL_3, order: 2 },
            SkillDatabaseMockConst.SKILL_TEST_4,
            SkillDatabaseMockConst.SKILL_TEST_5,
          ]),
        ),
      )
      .subscribe();
  });

  it('Should delete skills with parent id equal to 0.', () => {
    store
      .dispatch(new SkillStoreDatabaseMockAction.DeleteByParentIds([0]))
      .pipe(
        switchMap(() => store.select(SkillStoreDatabaseMockState.getItems)),
        tap((items) =>
          expect(items).toEqual([
            SkillDatabaseMockConst.SKILL_TEST_4,
            SkillDatabaseMockConst.SKILL_TEST_5,
          ]),
        ),
      )
      .subscribe();
  });
});

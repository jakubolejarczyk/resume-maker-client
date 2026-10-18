import { TestBed } from '@angular/core/testing';

import { SkillLogicService } from './skill-logic.service';
import { SkillDatabaseService } from '../../database/service/skill-database.service';
import * as util from '../util/logic.util';
import {
  SKILL_0,
  SKILL_1,
  SKILL_2,
  SKILL_3,
} from '../../database/const/skill-database.const';
import { SkillDataDatabaseModel } from '../../database/model/data/skill-data-database.model';
import { BaseDatabaseModel } from '../../database/model/base/base-database.model';

describe('Skill Logic Service', () => {
  let database: SkillDatabaseService;
  let logic: SkillLogicService;

  beforeEach(() => {
    database = TestBed.inject(SkillDatabaseService);
    logic = TestBed.inject(SkillLogicService);
  });

  it(util.messageSelect('skill', 2), () =>
    util.testSelect(database, logic, 2, [
      SKILL_0,
      SKILL_1,
      { ...SKILL_2, metadata: { ...SKILL_2.metadata, isSelected: true } },
      SKILL_3,
    ]),
  );

  it(util.messageDeselect('skill', 2), () =>
    util.testDeselect(database, logic, 2, [SKILL_0, SKILL_1, SKILL_2, SKILL_3]),
  );

  it(util.messageCreate('skill'), () => {
    const SKILL_4_DATA: SkillDataDatabaseModel = {
      category: 'Animals',
      skills: ['Dog', 'Cat'],
    };
    const SKILL_4: BaseDatabaseModel<SkillDataDatabaseModel> = {
      data: structuredClone(SKILL_4_DATA),
      metadata: {
        id: 4,
        parentId: 0,
        order: 4,
        isSelected: false,
      },
    };
    util.testCreate(database, logic, 0, SKILL_4_DATA, [
      SKILL_0,
      SKILL_1,
      SKILL_2,
      SKILL_3,
      SKILL_4,
    ]);
  });

  it(util.messageReadById(true, 'skill', 2), () =>
    util.testReadById(logic, 2, {
      success: true,
      message: 'The item was read correctly.',
      body: SKILL_2,
    }),
  );

  it(util.messageReadById(false, 'skill', 10), () =>
    util.testReadById(logic, 10, {
      success: false,
      message: 'Failed to read the item.',
      body: undefined,
    }),
  );

  it(util.messageReadByParentId(true, 'skills', 0), () =>
    util.testReadByParentId(logic, 0, {
      success: true,
      message: 'The items was read correctly.',
      body: [SKILL_0, SKILL_1, SKILL_2, SKILL_3],
    }),
  );

  it(util.messageReadByParentId(true, 'skills', 10), () =>
    util.testReadByParentId(logic, 10, {
      success: false,
      message: 'The list of items is empty.',
      body: [],
    }),
  );

  it(util.messageUpdate('skill', 0), () => {
    const SKILL_0_UPDATED = structuredClone(SKILL_0);
    SKILL_0_UPDATED.data.category = 'Hello';
    util.testUpdate(database, logic, 0, SKILL_0_UPDATED.data, [
      SKILL_0_UPDATED,
      SKILL_1,
      SKILL_2,
      SKILL_3,
    ]);
  });

  it(util.messageDelete('skill', 2), () =>
    util.testDelete(database, logic, 2, [
      SKILL_0,
      SKILL_1,
      { ...SKILL_3, metadata: { ...SKILL_3.metadata, order: 2 } },
    ]),
  );

  it(util.messageMoveUp('skill', 2), () =>
    util.testMoveUp(database, logic, 2, [
      SKILL_0,
      { ...SKILL_1, metadata: { ...SKILL_1.metadata, order: 2 } },
      { ...SKILL_2, metadata: { ...SKILL_2.metadata, order: 1 } },
      SKILL_3,
    ]),
  );

  it(util.messageMoveDown('user', 2), () =>
    util.testMoveDown(database, logic, 2, [
      SKILL_0,
      SKILL_1,
      { ...SKILL_2, metadata: { ...SKILL_2.metadata, order: 3 } },
      { ...SKILL_3, metadata: { ...SKILL_3.metadata, order: 2 } },
    ]),
  );
});

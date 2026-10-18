import { TestBed } from '@angular/core/testing';

import { SkillLogicService } from './skill-logic.service';
import * as util from '../util/logic.util';
import {
  SKILL_0,
  SKILL_1,
  SKILL_2,
  SKILL_3,
} from '../../database/const/skill-database.const';
import { SkillDataDatabaseModel } from '../../database/model/data/skill-data-database.model';

describe('Skill Logic Service', () => {
  let logic: SkillLogicService;

  beforeEach(() => {
    logic = TestBed.inject(SkillLogicService);
  });

  it(util.messageSelect(true, 'skill', 2), () =>
    util.testSelect(logic, 2, {
      success: true,
      message: 'The item was selected correctly.',
      body: { ...SKILL_2, metadata: { ...SKILL_2.metadata, isSelected: true } },
    }),
  );

  it(util.messageSelect(false, 'skill', 10), () =>
    util.testSelect(logic, 10, {
      success: false,
      message: 'Failed to select the item because it does not exist.',
      body: undefined,
    }),
  );

  it(util.messageDeselect(true, 'skill', 2), () =>
    util.testDeselect(logic, 2, {
      success: true,
      message: 'The item was deselected correctly.',
      body: SKILL_2,
    }),
  );

  it(util.messageDeselect(false, 'skill', 10), () =>
    util.testDeselect(logic, 10, {
      success: false,
      message: 'Failed to deselect the item because it does not exist.',
      body: undefined,
    }),
  );

  it(util.messageCreate('skill'), () => {
    const SKILL_4_DATA: SkillDataDatabaseModel = {
      category: 'Animals',
      skills: ['Dog', 'Cat'],
    };
    util.testCreate(logic, 0, SKILL_4_DATA, {
      success: true,
      message: 'The item was created correctly.',
      body: {
        data: SKILL_4_DATA,
        metadata: {
          id: 4,
          parentId: 0,
          order: 4,
          isSelected: false,
        },
      },
    });
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

  it(util.messageUpdate(true, 'skill', 0), () => {
    const SKILL_0_UPDATED = structuredClone(SKILL_0);
    SKILL_0_UPDATED.data.category = 'Hello';
    util.testUpdate(logic, 0, SKILL_0_UPDATED.data, {
      success: true,
      message: 'The item was updated correctly.',
      body: SKILL_0_UPDATED,
    });
  });

  it(util.messageUpdate(false, 'skill', 10), () => {
    const SKILL_10_UPDATED = structuredClone(SKILL_0);
    SKILL_10_UPDATED.metadata.id = 10;
    SKILL_10_UPDATED.data.category = 'Animals';
    util.testUpdate(logic, 10, SKILL_10_UPDATED.data, {
      success: false,
      message: 'Failed to update the item because it does not exist.',
      body: undefined,
    });
  });

  it(util.messageDelete(true, 'skill', 2), () =>
    util.testDelete(logic, 2, {
      success: true,
      message: 'The item was deleted correctly.',
      body: SKILL_2,
    }),
  );

  it(util.messageMoveUp(true, 'skill', 2), () =>
    util.testMoveUp(logic, 2, {
      success: true,
      message: 'The item was moved up correctly.',
      body: {
        data: SKILL_2.data,
        metadata: {
          ...SKILL_2.metadata,
          order: 1,
        },
      },
    }),
  );

  it(util.messageMoveDown(true, 'user', 2), () =>
    util.testMoveDown(logic, 2, {
      success: true,
      message: 'The item was moved down correctly.',
      body: {
        data: SKILL_2.data,
        metadata: {
          ...SKILL_2.metadata,
          order: 3,
        },
      },
    }),
  );
});

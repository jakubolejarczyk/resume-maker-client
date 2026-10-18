import { TestBed } from '@angular/core/testing';

import { EducationLogicService } from './education-logic.service';
import * as util from '../util/logic.util';
import {
  EDUCATION_0,
  EDUCATION_1,
} from '../../database/const/education-database.const';
import { EducationDataDatabaseModel } from '../../database/model/data/education-data-database.model';

describe('Education Logic Service', () => {
  let logic: EducationLogicService;

  beforeEach(() => {
    logic = TestBed.inject(EducationLogicService);
  });

  it(util.messageSelect(true, 'education', 1), () =>
    util.testSelect(logic, 1, {
      success: true,
      message: 'The item was selected correctly.',
      body: {
        ...EDUCATION_1,
        metadata: { ...EDUCATION_1.metadata, isSelected: true },
      },
    }),
  );

  it(util.messageSelect(false, 'education', 10), () =>
    util.testSelect(logic, 10, {
      success: false,
      message: 'Failed to select the item because it does not exist.',
      body: undefined,
    }),
  );

  it(util.messageDeselect(true, 'education', 1), () =>
    util.testDeselect(logic, 1, {
      success: true,
      message: 'The item was deselected correctly.',
      body: EDUCATION_1,
    }),
  );

  it(util.messageDeselect(false, 'education', 10), () =>
    util.testDeselect(logic, 10, {
      success: false,
      message: 'Failed to deselect the item because it does not exist.',
      body: undefined,
    }),
  );

  it(util.messageCreate('education'), () => {
    const EDUCATION_2_DATA: EducationDataDatabaseModel = {
      institutionName: 'Krakow University of Technology',
      fieldOfStudy: 'Software Engineering',
      degree: 'Bachelor of Science',
      startYear: 2021,
      endYear: 2024,
    };
    util.testCreate(logic, 0, EDUCATION_2_DATA, {
      success: true,
      message: 'The item was created correctly.',
      body: {
        data: EDUCATION_2_DATA,
        metadata: {
          id: 2,
          parentId: 0,
          order: 2,
          isSelected: false,
        },
      },
    });
  });

  it(util.messageReadById(true, 'education', 1), () =>
    util.testReadById(logic, 1, {
      success: true,
      message: 'The item was read correctly.',
      body: EDUCATION_1,
    }),
  );

  it(util.messageReadById(false, 'education', 10), () =>
    util.testReadById(logic, 10, {
      success: false,
      message: 'Failed to read the item.',
      body: undefined,
    }),
  );

  it(util.messageReadByParentId(true, 'educations', 0), () =>
    util.testReadByParentId(logic, 0, {
      success: true,
      message: 'The items was read correctly.',
      body: [EDUCATION_0, EDUCATION_1],
    }),
  );

  it(util.messageReadByParentId(true, 'educations', 10), () =>
    util.testReadByParentId(logic, 10, {
      success: false,
      message: 'The list of items is empty.',
      body: [],
    }),
  );

  it(util.messageUpdate(true, 'education', 1), () => {
    const EDUCATION_1_UPDATED = structuredClone(EDUCATION_1);
    EDUCATION_1_UPDATED.data.startYear = 2050;
    util.testUpdate(logic, 1, EDUCATION_1_UPDATED.data, {
      success: true,
      message: 'The item was updated correctly.',
      body: EDUCATION_1_UPDATED,
    });
  });

  it(util.messageUpdate(false, 'education', 10), () => {
    const EDUCATION_10_UPDATED = structuredClone(EDUCATION_0);
    EDUCATION_10_UPDATED.metadata.id = 10;
    EDUCATION_10_UPDATED.data.startYear = 2050;
    util.testUpdate(logic, 10, EDUCATION_10_UPDATED.data, {
      success: false,
      message: 'Failed to update the item because it does not exist.',
      body: undefined,
    });
  });

  it(util.messageDelete(true, 'education', 1), () =>
    util.testDelete(logic, 1, {
      success: true,
      message: 'The item was deleted correctly.',
      body: EDUCATION_1,
    }),
  );

  it(util.messageMoveUp(true, 'education', 1), () =>
    util.testMoveUp(logic, 1, {
      success: true,
      message: 'The item was moved up correctly.',
      body: { ...EDUCATION_1, metadata: { ...EDUCATION_1.metadata, order: 0 } },
    }),
  );

  it(util.messageMoveDown(false, 'education', 1), () =>
    util.testMoveDown(logic, 1, {
      success: false,
      message: 'Failed to move down the item because it is the last element.',
      body: undefined,
    }),
  );
});

import { TestBed } from '@angular/core/testing';

import { EducationLogicService } from './education-logic.service';
import { EducationDatabaseService } from '../../database/service/education-database.service';
import * as util from '../util/logic.util';
import {
  EDUCATION_0,
  EDUCATION_1,
} from '../../database/const/education-database.const';
import { EducationDataDatabaseModel } from '../../database/model/data/education-data-database.model';
import { BaseDatabaseModel } from '../../database/model/base/base-database.model';

describe('Education Logic Service', () => {
  let database: EducationDatabaseService;
  let logic: EducationLogicService;

  beforeEach(() => {
    database = TestBed.inject(EducationDatabaseService);
    logic = TestBed.inject(EducationLogicService);
  });

  it(util.messageSelect('education', 1), () =>
    util.testSelect(database, logic, 1, [
      EDUCATION_0,
      {
        ...EDUCATION_1,
        metadata: { ...EDUCATION_1.metadata, isSelected: true },
      },
    ]),
  );

  it(util.messageDeselect('education', 1), () =>
    util.testDeselect(database, logic, 1, [EDUCATION_0, EDUCATION_1]),
  );

  it(util.messageCreate('education'), () => {
    const EDUCATION_2_DATA: EducationDataDatabaseModel = {
      institutionName: 'Krakow University of Technology',
      fieldOfStudy: 'Software Engineering',
      degree: 'Bachelor of Science',
      startYear: 2021,
      endYear: 2024,
    };
    const EDUCATION_2: BaseDatabaseModel<EducationDataDatabaseModel> = {
      data: structuredClone(EDUCATION_2_DATA),
      metadata: {
        id: 2,
        parentId: 0,
        order: 2,
        isSelected: false,
      },
    };
    util.testCreate(database, logic, 0, EDUCATION_2_DATA, [
      EDUCATION_0,
      EDUCATION_1,
      EDUCATION_2,
    ]);
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
      body: undefined,
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

  it(util.messageDelete('education', 1), () =>
    util.testDelete(database, logic, 1, [
      { ...EDUCATION_0, metadata: { ...EDUCATION_0.metadata, order: 0 } },
    ]),
  );

  it(util.messageMoveUp('education', 1), () =>
    util.testMoveUp(database, logic, 1, [
      { ...EDUCATION_0, metadata: { ...EDUCATION_0.metadata, order: 1 } },
      { ...EDUCATION_1, metadata: { ...EDUCATION_1.metadata, order: 0 } },
    ]),
  );

  it(util.messageMoveDown('education', 1), () =>
    util.testMoveDown(database, logic, 1, [
      { ...EDUCATION_0, metadata: { ...EDUCATION_0.metadata, order: 0 } },
      { ...EDUCATION_1, metadata: { ...EDUCATION_1.metadata, order: 1 } },
    ]),
  );
});

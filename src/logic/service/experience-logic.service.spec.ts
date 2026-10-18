import { TestBed } from '@angular/core/testing';

import { ExperienceLogicService } from './experience-logic.service';
import * as util from '../util/logic.util';
import {
  EXPERIENCE_0,
  EXPERIENCE_1,
} from '../../database/const/experience-database.const';
import { ExperienceDataDatabaseModel } from '../../database/model/data/experience-data-database.model';

describe('Experience Logic Service', () => {
  let logic: ExperienceLogicService;

  beforeEach(() => {
    logic = TestBed.inject(ExperienceLogicService);
  });

  it(util.messageSelect(true, 'experience', 1), () =>
    util.testSelect(logic, 1, {
      success: true,
      message: 'The item was selected correctly.',
      body: {
        ...EXPERIENCE_1,
        metadata: { ...EXPERIENCE_1.metadata, isSelected: true },
      },
    }),
  );

  it(util.messageSelect(false, 'experience', 10), () =>
    util.testSelect(logic, 10, {
      success: false,
      message: 'Failed to select the item because it does not exist.',
      body: undefined,
    }),
  );

  it(util.messageDeselect(true, 'experience', 1), () =>
    util.testDeselect(logic, 1, {
      success: true,
      message: 'The item was deselected correctly.',
      body: EXPERIENCE_1,
    }),
  );

  it(util.messageDeselect(false, 'experience', 10), () =>
    util.testDeselect(logic, 10, {
      success: false,
      message: 'Failed to deselect the item because it does not exist.',
      body: undefined,
    }),
  );

  it(util.messageCreate('experience'), () => {
    const EXPERIENCE_2_DATA: ExperienceDataDatabaseModel = {
      company: 'TechNova Solutions',
      jobTitle: 'Junior Software Engineer',
      description: [
        'Developed and maintained web applications using React, TypeScript, and Node.js, implementing new features and improving existing functionality to enhance user experience and application reliability.',
        'Built and integrated RESTful APIs to support communication between frontend applications and backend services, ensuring consistent data exchange and reliable application behavior.',
        'Designed and optimized database queries using PostgreSQL, improving data retrieval performance and maintaining data integrity across application workflows.',
        'Collaborated with developers, designers, and QA engineers in an Agile environment to analyze requirements, troubleshoot issues, conduct code reviews, and deliver maintainable software solutions.',
        'Participated in debugging, testing, and refactoring activities, applying software engineering best practices to improve code quality, application performance, and long-term maintainability.',
      ],
      startDate: '2024-07-01',
    };
    util.testCreate(logic, 0, EXPERIENCE_2_DATA, {
      success: true,
      message: 'The item was created correctly.',
      body: {
        data: EXPERIENCE_2_DATA,
        metadata: {
          id: 2,
          parentId: 0,
          order: 2,
          isSelected: false,
        },
      },
    });
  });

  it(util.messageReadById(true, 'experience', 1), () =>
    util.testReadById(logic, 1, {
      success: true,
      message: 'The item was read correctly.',
      body: EXPERIENCE_1,
    }),
  );

  it(util.messageReadById(false, 'experience', 10), () =>
    util.testReadById(logic, 10, {
      success: false,
      message: 'Failed to read the item.',
      body: undefined,
    }),
  );

  it(util.messageReadByParentId(true, 'experiences', 0), () =>
    util.testReadByParentId(logic, 0, {
      success: true,
      message: 'The items was read correctly.',
      body: [EXPERIENCE_0, EXPERIENCE_1],
    }),
  );

  it(util.messageReadByParentId(true, 'experiences', 10), () =>
    util.testReadByParentId(logic, 10, {
      success: false,
      message: 'The list of items is empty.',
      body: [],
    }),
  );

  it(util.messageUpdate(true, 'experience', 1), () => {
    const EXPERIENCE_1_UPDATED = structuredClone(EXPERIENCE_1);
    EXPERIENCE_1_UPDATED.data.jobTitle = 'Programmer';
    util.testUpdate(logic, 1, EXPERIENCE_1_UPDATED.data, {
      success: true,
      message: 'The item was updated correctly.',
      body: EXPERIENCE_1_UPDATED,
    });
  });

  it(util.messageUpdate(false, 'experience', 10), () => {
    const EXPERIENCE_10_UPDATED = structuredClone(EXPERIENCE_0);
    EXPERIENCE_10_UPDATED.metadata.id = 10;
    EXPERIENCE_10_UPDATED.data.jobTitle = 'Programmer';
    util.testUpdate(logic, 10, EXPERIENCE_10_UPDATED.data, {
      success: false,
      message: 'Failed to update the item because it does not exist.',
      body: undefined,
    });
  });

  it(util.messageDelete(true, 'experience', 0), () =>
    util.testDelete(logic, 0, {
      success: true,
      message: 'The item was deleted correctly.',
      body: EXPERIENCE_0,
    }),
  );

  it(util.messageMoveUp(true, 'experience', 1), () =>
    util.testMoveUp(logic, 1, {
      success: true,
      message: 'The item was moved up correctly.',
      body: {
        ...EXPERIENCE_1,
        metadata: { ...EXPERIENCE_1.metadata, order: 0 },
      },
    }),
  );

  it(util.messageMoveDown(true, 'experience', 0), () =>
    util.testMoveDown(logic, 0, {
      success: true,
      message: 'The item was moved down correctly.',
      body: {
        ...EXPERIENCE_0,
        metadata: { ...EXPERIENCE_0.metadata, order: 1 },
      },
    }),
  );
});

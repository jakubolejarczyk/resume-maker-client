import { TestBed } from '@angular/core/testing';

import { ExperienceLogicService } from './experience-logic.service';
import { ExperienceDatabaseService } from '../../database/service/experience-database.service';
import * as util from '../util/logic.util';
import {
  EXPERIENCE_0,
  EXPERIENCE_1,
} from '../../database/const/experience-database.const';
import { ExperienceDataDatabaseModel } from '../../database/model/data/experience-data-database.model';
import { BaseDatabaseModel } from '../../database/model/base/base-database.model';

describe('Experience Logic Service', () => {
  let database: ExperienceDatabaseService;
  let logic: ExperienceLogicService;

  beforeEach(() => {
    database = TestBed.inject(ExperienceDatabaseService);
    logic = TestBed.inject(ExperienceLogicService);
  });

  it(util.messageSelect('experience', 1), () =>
    util.testSelect(database, logic, 1, [
      EXPERIENCE_0,
      {
        ...EXPERIENCE_1,
        metadata: { ...EXPERIENCE_1.metadata, isSelected: true },
      },
    ]),
  );

  it(util.messageDeselect('experience', 1), () =>
    util.testDeselect(database, logic, 1, [EXPERIENCE_0, EXPERIENCE_1]),
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
    const EXPERIENCE_2: BaseDatabaseModel<ExperienceDataDatabaseModel> = {
      data: structuredClone(EXPERIENCE_2_DATA),
      metadata: {
        id: 2,
        parentId: 0,
        order: 2,
        isSelected: false,
      },
    };
    util.testCreate(database, logic, 0, EXPERIENCE_2_DATA, [
      EXPERIENCE_0,
      EXPERIENCE_1,
      EXPERIENCE_2,
    ]);
  });

  it(util.messageReadById(true, 'experience', 1), () =>
    util.testReadById(logic, 1, {
      success: true,
      message: "The item was read correctly.",
      body: EXPERIENCE_1
    }),
  );

  it(util.messageReadById(false, 'experience', 10), () =>
    util.testReadById(logic, 10, {
      success: false,
      message: "Failed to read the item.",
      body: undefined,
    }),
  );

  it(util.messageReadByParentId(true, 'experience', 0), () =>
    util.testReadByParentId(logic, 0, {
      success: true,
      message: "The items was read correctly.",
      body: [EXPERIENCE_0, EXPERIENCE_1]
    }),
  );

  it(util.messageUpdate('experience', 1), () => {
    const EXPERIENCE_1_UPDATED = structuredClone(EXPERIENCE_1);
    EXPERIENCE_1_UPDATED.data.jobTitle = 'Programmer';
    util.testUpdate(database, logic, 1, EXPERIENCE_1_UPDATED.data, [
      EXPERIENCE_0,
      EXPERIENCE_1_UPDATED,
    ]);
  });

  it(util.messageDelete('experience', 0), () =>
    util.testDelete(database, logic, 0, [
      { ...EXPERIENCE_1, metadata: { ...EXPERIENCE_1.metadata, order: 0 } },
    ]),
  );

  it(util.messageMoveUp('experience', 1), () =>
    util.testMoveUp(database, logic, 1, [
      { ...EXPERIENCE_0, metadata: { ...EXPERIENCE_0.metadata, order: 1 } },
      { ...EXPERIENCE_1, metadata: { ...EXPERIENCE_1.metadata, order: 0 } },
    ]),
  );

  it(util.messageMoveDown('experience', 1), () =>
    util.testMoveDown(database, logic, 1, [
      { ...EXPERIENCE_0, metadata: { ...EXPERIENCE_0.metadata, order: 0 } },
      { ...EXPERIENCE_1, metadata: { ...EXPERIENCE_1.metadata, order: 1 } },
    ]),
  );
});

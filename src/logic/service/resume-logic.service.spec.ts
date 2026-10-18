import { TestBed } from '@angular/core/testing';

import { ResumeLogicService } from './resume-logic.service';
import { ResumeDatabaseService } from '../../database/service/resume-database.service';
import * as util from '../util/logic.util';
import { RESUME_0 } from '../../database/const/resume-database.const';
import { ResumeDataDatabaseModel } from '../../database/model/data/resume-data-database.model';
import { BaseDatabaseModel } from '../../database/model/base/base-database.model';

describe('Resume Logic Service', () => {
  let database: ResumeDatabaseService;
  let logic: ResumeLogicService;

  beforeEach(() => {
    database = TestBed.inject(ResumeDatabaseService);
    logic = TestBed.inject(ResumeLogicService);
  });

  it(util.messageSelect('resume', 0), () =>
    util.testSelect(database, logic, 0, [
      { ...RESUME_0, metadata: { ...RESUME_0.metadata, isSelected: true } },
    ]),
  );

  it(util.messageDeselect('resume', 0), () =>
    util.testDeselect(database, logic, 0, [RESUME_0]),
  );

  it(util.messageCreate('resume'), () => {
    const RESUME_1_DATA: ResumeDataDatabaseModel = {
      name: 'Adam Kowalski - Resume English',
      jobTitle: 'Junior Software Engineer',
      summary:
        'Software Engineer with 2+ years of experience in web development, specializing in React on the frontend and Node.js on the backend. Experienced in building responsive web applications, developing RESTful APIs, and integrating third-party services, with a strong focus on clean code, maintainability, and performance. Familiar with the full software development lifecycle and collaborative Agile workflows, with a passion for learning new technologies and delivering reliable, user-focused software solutions.',
    };
    const RESUME_1: BaseDatabaseModel<ResumeDataDatabaseModel> = {
      data: structuredClone(RESUME_1_DATA),
      metadata: {
        id: 1,
        parentId: 0,
        order: 1,
        isSelected: false,
      },
    };
    util.testCreate(database, logic, 0, RESUME_1_DATA, [RESUME_0, RESUME_1]);
  });

  it(util.messageReadById(true, 'resume', 0), () =>
    util.testReadById(logic, 0, {
      success: true,
      message: 'The item was read correctly.',
      body: RESUME_0,
    }),
  );

  it(util.messageReadById(false, 'resume', 10), () =>
    util.testReadById(logic, 10, {
      success: false,
      message: 'Failed to read the item.',
      body: undefined,
    }),
  );

  it(util.messageReadByParentId(true, 'resumes', 0), () =>
    util.testReadByParentId(logic, 0, {
      success: true,
      message: 'The items was read correctly.',
      body: [RESUME_0],
    }),
  );

  it(util.messageReadByParentId(true, 'resumes', 10), () =>
    util.testReadByParentId(logic, 10, {
      success: false,
      message: 'The list of items is empty.',
      body: [],
    }),
  );

  it(util.messageUpdate('resume', 0), () => {
    const RESUME_0_UPDATED = structuredClone(RESUME_0);
    RESUME_0_UPDATED.data.jobTitle = 'Programmer';
    util.testUpdate(database, logic, 0, RESUME_0_UPDATED.data, [
      RESUME_0_UPDATED,
    ]);
  });

  it(util.messageDelete('resume', 0), () =>
    util.testDelete(database, logic, 0, []),
  );

  it(util.messageMoveUp('resume', 0), () =>
    util.testMoveUp(database, logic, 0, [RESUME_0]),
  );

  it(util.messageMoveDown('resume', 0), () =>
    util.testMoveDown(database, logic, 0, [RESUME_0]),
  );
});

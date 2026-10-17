import { TestBed } from '@angular/core/testing';

import { ResumeDatabaseService } from './resume-database.service';
import * as util from '../util/database.util';
import { RESUME_0 } from '../const/resume-database.const';
import { BaseDatabaseModel } from '../model/base/base-database.model';
import { ResumeDataDatabaseModel } from '../model/data/resume-data-database.model';

describe('Resume Database Service', () => {
  let database: ResumeDatabaseService;

  beforeEach(() => {
    database = TestBed.inject(ResumeDatabaseService);
  });

  it(util.messageCreate('resume', 1), () => {
    const RESUME_1: BaseDatabaseModel<ResumeDataDatabaseModel> = {
      data: {
        name: 'John Doe - Resume English',
        jobTitle: 'Software Engineer',
        summary:
          'Software Engineer with experience in full-stack web development, building scalable web applications and RESTful APIs. Skilled in frontend and backend technologies, software architecture, performance optimization, and writing clean, maintainable code. Passionate about solving complex problems, learning new technologies, and collaborating with cross-functional teams to deliver high-quality software solutions.',
      },
      metadata: {
        id: 1,
        parentId: 0,
        order: 1,
        isSelected: false,
      },
    };
    util.testCreate(database, RESUME_1, [RESUME_0, RESUME_1]);
  });

  it(util.messageReadAll('resumes'), () =>
    util.testReadAll(database, [RESUME_0]),
  );

  it(util.messageReadById('resume', 0), () =>
    util.testReadById(database, 0, RESUME_0),
  );

  it(util.messageReadByParentId('resumes', 0), () =>
    util.testReadByParentId(database, 0, [RESUME_0]),
  );

  it(util.messageUpdate('resume', 0), () => {
    const RESUME_0_COPY = structuredClone(RESUME_0);
    RESUME_0_COPY.data.jobTitle = 'Programmer';
    util.testUpdate(database, RESUME_0_COPY);
  });

  it(util.messageDelete('resume', 0), () => util.testDelete(database, 0, []));
});

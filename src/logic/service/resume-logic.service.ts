import { Service } from '@angular/core';

import { BaseLogicService } from './base-logic.service';
import { ResumeDataDatabaseModel } from '../../database/model/data/resume-data-database.model';
import { ResumeDatabaseService } from '../../database/service/resume-database.service';

@Service()
export class ResumeLogicService extends BaseLogicService<ResumeDataDatabaseModel> {
  constructor() {
    super(ResumeDatabaseService);
  }
}

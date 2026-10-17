import { Service } from '@angular/core';

import { ResumeDataDatabaseModel } from '../model/data/resume-data-database.model';
import { BaseDatabaseData } from './base-database.data';
import { RESUME_0 } from '../const/resume-database.const';

@Service()
export class ResumeDatabaseData extends BaseDatabaseData<ResumeDataDatabaseModel> {
  constructor() {
    super([RESUME_0]);
  }
}

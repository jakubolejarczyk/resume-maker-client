import { Service } from '@angular/core';

import { EducationDataDatabaseModel } from '../model/data/education-data-database.model';
import { BaseDatabaseData } from './base-database.data';
import { EDUCATION_0, EDUCATION_1 } from '../const/education-database.const';

@Service()
export class EducationDatabaseData extends BaseDatabaseData<EducationDataDatabaseModel> {
  constructor() {
    super([EDUCATION_0, EDUCATION_1]);
  }
}

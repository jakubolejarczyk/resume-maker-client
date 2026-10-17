import { Service } from '@angular/core';

import { BaseLogicService } from './base-logic.service';
import { ExperienceDataDatabaseModel } from '../../database/model/data/experience-data-database.model';
import { ExperienceDatabaseService } from '../../database/service/experience-database.service';

@Service()
export class ExperienceLogicService extends BaseLogicService<ExperienceDataDatabaseModel> {
  constructor() {
    super(ExperienceDatabaseService);
  }
}

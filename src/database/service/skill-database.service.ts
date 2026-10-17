import { Service } from '@angular/core';

import { BaseDatabaseService } from './base-database.service';
import { SkillDataDatabaseModel } from '../model/data/skill-data-database.model';
import { SkillDatabaseData } from '../data/skill-database.data';

@Service()
export class SkillDatabaseService extends BaseDatabaseService<SkillDataDatabaseModel> {
  constructor() {
    super(SkillDatabaseData);
  }
}

import { Service } from '@angular/core';

import { BaseApiService } from './base-api.service';
import { SkillDataApiModel } from '../model/data/skill-data-api.model';

@Service()
export class SkillApiService extends BaseApiService<SkillDataApiModel> {
  constructor() {
    super('Skill');
  }
}

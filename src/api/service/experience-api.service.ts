import { Service } from '@angular/core';

import { BaseApiService } from './base-api.service';
import { ExperienceDataApiModel } from '../model/data/experience-data-api.model';

@Service()
export class ExperienceApiService extends BaseApiService<ExperienceDataApiModel> {
  constructor() {
    super('Experience');
  }
}

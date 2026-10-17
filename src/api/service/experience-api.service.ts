import { Service } from '@angular/core';

import { BaseApiService } from './base-api.service';
import { ExperienceDataApiModel } from '../model/data/experience-data-api.model';
import { ExperienceLogicService } from '../../logic/service/experience-logic.service';

@Service()
export class ExperienceApiService extends BaseApiService<ExperienceDataApiModel> {
  constructor() {
    super(ExperienceLogicService);
  }
}

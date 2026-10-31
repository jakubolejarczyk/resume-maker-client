import { Service } from '@angular/core';

import { BaseApiService } from './base-api.service';
import { EducationDataApiModel } from '../model/data/education-data-api.model';
import { EducationLogicService } from '../../logic/service/education-logic.service';

@Service()
export class EducationApiService extends BaseApiService<EducationDataApiModel> {
  constructor() {
    super(EducationLogicService, 'Education');
  }
}

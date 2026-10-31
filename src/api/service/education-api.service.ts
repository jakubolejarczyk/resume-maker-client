import { Service } from '@angular/core';

import { BaseApiService } from './base-api.service';
import { EducationDataApiModel } from '../model/data/education-data-api.model';

@Service()
export class EducationApiService extends BaseApiService<EducationDataApiModel> {
  constructor() {
    super('Education');
  }
}

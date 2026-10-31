import { Service } from '@angular/core';

import { BaseApiService } from './base-api.service';
import { ResumeDataApiModel } from '../model/data/resume-data-api.model';

@Service()
export class ResumeApiService extends BaseApiService<ResumeDataApiModel> {
  constructor() {
    super('Resume');
  }
}

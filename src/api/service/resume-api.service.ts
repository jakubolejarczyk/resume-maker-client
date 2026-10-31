import { Service } from '@angular/core';

import { BaseApiService } from './base-api.service';
import { ResumeDataApiModel } from '../model/data/resume-data-api.model';
import { ResumeLogicService } from '../../logic/service/resume-logic.service';

@Service()
export class ResumeApiService extends BaseApiService<ResumeDataApiModel> {
  constructor() {
    super(ResumeLogicService, 'Resume');
  }
}

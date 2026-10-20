import { Service } from '@angular/core';

import { BaseService } from './base.service';
import { ResumeDataApiModel } from '../api/model/data/resume-data-api.model';
import { ResumeApiService } from '../api/service/resume-api.service';
import { ResumeStoreState } from '../store/state/resume-store.state';
import { ResumeStoreAction } from '../store/action/resume-store.action';

@Service()
export class ResumeService extends BaseService<ResumeDataApiModel> {
  constructor() {
    super(
      ResumeApiService,
      ResumeStoreState.getStatus,
      ResumeStoreState.getIsLoading,
      ResumeStoreState.getItems,
      ResumeStoreState.getSelectedItem,
      ResumeStoreState.getColumns,
      ResumeStoreAction.SetStatus,
      ResumeStoreAction.SetIsLoading,
      ResumeStoreAction.SetItems,
    );
  }
}

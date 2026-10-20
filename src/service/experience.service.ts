import { Service } from '@angular/core';

import { BaseService } from './base.service';
import { ExperienceDataApiModel } from '../api/model/data/experience-data-api.model';
import { ExperienceApiService } from '../api/service/experience-api.service';
import { ExperienceStoreState } from '../store/state/experience-store.state';
import { ExperienceStoreAction } from '../store/action/experience-store.action';

@Service()
export class ExperienceService extends BaseService<ExperienceDataApiModel> {
  constructor() {
    super(
      ExperienceApiService,
      ExperienceStoreState.getStatus,
      ExperienceStoreState.getIsLoading,
      ExperienceStoreState.getItems,
      ExperienceStoreState.getSelectedItem,
      ExperienceStoreState.getColumns,
      ExperienceStoreAction.SetStatus,
      ExperienceStoreAction.SetIsLoading,
      ExperienceStoreAction.SetItems,
    );
  }
}

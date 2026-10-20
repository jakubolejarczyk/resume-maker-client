import { Service } from '@angular/core';

import { BaseService } from './base.service';
import { EducationDataApiModel } from '../api/model/data/education-data-api.model';
import { EducationApiService } from '../api/service/education-api.service';
import { EducationStoreState } from '../store/state/education-store.state';
import { EducationStoreAction } from '../store/action/education-store.action';

@Service()
export class EducationService extends BaseService<EducationDataApiModel> {
  constructor() {
    super(
      EducationApiService,
      EducationStoreState.getStatus,
      EducationStoreState.getIsLoading,
      EducationStoreState.getItems,
      EducationStoreState.getSelectedItem,
      EducationStoreState.getColumns,
      EducationStoreAction.SetStatus,
      EducationStoreAction.SetIsLoading,
      EducationStoreAction.SetItems,
      EducationStoreAction.SetSelectedItem,
    );
  }
}

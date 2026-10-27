import { Service } from '@angular/core';

import { BaseService } from './base.service';
import { SkillDataApiModel } from '../api/model/data/skill-data-api.model';
import { SkillApiService } from '../api/service/skill-api.service';
import { SkillStoreState } from '../store/state/skill-store.state';
import { SkillStoreAction } from '../store/action/skill-store.action';

@Service()
export class SkillService extends BaseService<SkillDataApiModel> {
  constructor() {
    super(
      SkillApiService,
      SkillStoreState.getStatus,
      SkillStoreState.getIsLoading,
      SkillStoreState.getItems,
      SkillStoreState.getSelectedItem,
      SkillStoreState.getColumns,
      SkillStoreAction.SetStatus,
      SkillStoreAction.SetIsLoading,
      SkillStoreAction.SetItems,
    );
  }

  override createEmptyItem(): SkillDataApiModel {
    return {
      category: '',
      skills: [],
    };
  }
}

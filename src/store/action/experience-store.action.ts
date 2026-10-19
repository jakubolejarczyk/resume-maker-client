import { ExperienceDataApiModel } from '../../api/model/data/experience-data-api.model';
import { BaseStoreAction } from './base-store.action';

export namespace ExperienceStoreAction {
  const ACTION_TYPE = 'ExperienceStoreState';

  export class SetStatus extends BaseStoreAction.SetStatus {
    static readonly type =
      BaseStoreAction.SetStatus.BuildActionType(ACTION_TYPE);
  }

  export class SetIsLoading extends BaseStoreAction.SetIsLoading {
    static readonly type =
      BaseStoreAction.SetIsLoading.BuildActionType(ACTION_TYPE);
  }

  export class SetItems extends BaseStoreAction.SetItems<ExperienceDataApiModel> {
    static readonly type =
      BaseStoreAction.SetItems.BuildActionType(ACTION_TYPE);
  }

  export class SetSelectedItem extends BaseStoreAction.SetSelectedItem<ExperienceDataApiModel> {
    static readonly type =
      BaseStoreAction.SetSelectedItem.BuildActionType(ACTION_TYPE);
  }
}

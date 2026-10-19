import { SkillDataApiModel } from '../../api/model/data/skill-data-api.model';
import { BaseStoreAction } from './base-store.action';

export namespace SkillStoreAction {
  const ACTION_TYPE = 'SkillStoreState';

  export class SetStatus extends BaseStoreAction.SetStatus {
    static readonly type =
      BaseStoreAction.SetStatus.BuildActionType(ACTION_TYPE);
  }

  export class SetIsLoading extends BaseStoreAction.SetIsLoading {
    static readonly type =
      BaseStoreAction.SetIsLoading.BuildActionType(ACTION_TYPE);
  }

  export class SetItems extends BaseStoreAction.SetItems<SkillDataApiModel> {
    static readonly type =
      BaseStoreAction.SetItems.BuildActionType(ACTION_TYPE);
  }

  export class SetSelectedItem extends BaseStoreAction.SetSelectedItem<SkillDataApiModel> {
    static readonly type =
      BaseStoreAction.SetSelectedItem.BuildActionType(ACTION_TYPE);
  }
}

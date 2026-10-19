import { ResumeDataApiModel } from '../../api/model/data/resume-data-api.model';
import { BaseStoreAction } from './base-store.action';

export namespace ResumeStoreAction {
  const ACTION_TYPE = 'ResumeStoreState';

  export class SetStatus extends BaseStoreAction.SetStatus {
    static readonly type =
      BaseStoreAction.SetStatus.BuildActionType(ACTION_TYPE);
  }

  export class SetIsLoading extends BaseStoreAction.SetIsLoading {
    static readonly type =
      BaseStoreAction.SetIsLoading.BuildActionType(ACTION_TYPE);
  }

  export class SetItems extends BaseStoreAction.SetItems<ResumeDataApiModel> {
    static readonly type =
      BaseStoreAction.SetItems.BuildActionType(ACTION_TYPE);
  }

  export class SetSelectedItem extends BaseStoreAction.SetSelectedItem<ResumeDataApiModel> {
    static readonly type =
      BaseStoreAction.SetSelectedItem.BuildActionType(ACTION_TYPE);
  }
}

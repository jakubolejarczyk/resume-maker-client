import { UserDataApiModel } from '../../api/model/data/user-data-api.model';
import { BaseStoreAction } from './base-store.action';

export namespace UserStoreAction {
  const ACTION_TYPE = 'UserStoreState';

  export class SetStatus extends BaseStoreAction.SetStatus {
    static readonly type =
      BaseStoreAction.SetStatus.BuildActionType(ACTION_TYPE);
  }

  export class SetIsLoading extends BaseStoreAction.SetIsLoading {
    static readonly type =
      BaseStoreAction.SetIsLoading.BuildActionType(ACTION_TYPE);
  }

  export class SetItems extends BaseStoreAction.SetItems<UserDataApiModel> {
    static readonly type =
      BaseStoreAction.SetItems.BuildActionType(ACTION_TYPE);
  }

  export class SetSelectedItem extends BaseStoreAction.SetSelectedItem<UserDataApiModel> {
    static readonly type =
      BaseStoreAction.SetSelectedItem.BuildActionType(ACTION_TYPE);
  }
}

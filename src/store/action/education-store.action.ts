import { EducationDataApiModel } from '../../api/model/data/education-data-api.model';
import { BaseStoreAction } from './base-store.action';

export namespace EducationStoreAction {
  const ACTION_TYPE = 'EducationStoreState';

  export class SetStatus extends BaseStoreAction.SetStatus {
    static readonly type =
      BaseStoreAction.SetStatus.BuildActionType(ACTION_TYPE);
  }

  export class SetIsLoading extends BaseStoreAction.SetIsLoading {
    static readonly type =
      BaseStoreAction.SetIsLoading.BuildActionType(ACTION_TYPE);
  }

  export class SetItems extends BaseStoreAction.SetItems<EducationDataApiModel> {
    static readonly type =
      BaseStoreAction.SetItems.BuildActionType(ACTION_TYPE);
  }
}

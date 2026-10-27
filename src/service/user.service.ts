import { Service } from '@angular/core';

import { BaseService } from './base.service';
import { UserDataApiModel } from '../api/model/data/user-data-api.model';
import { UserApiService } from '../api/service/user-api.service';
import { UserStoreState } from '../store/state/user-store.state';
import { UserStoreAction } from '../store/action/user-store.action';

@Service()
export class UserService extends BaseService<UserDataApiModel> {
  constructor() {
    super(
      UserApiService,
      UserStoreState.getStatus,
      UserStoreState.getIsLoading,
      UserStoreState.getItems,
      UserStoreState.getSelectedItem,
      UserStoreState.getColumns,
      UserStoreAction.SetStatus,
      UserStoreAction.SetIsLoading,
      UserStoreAction.SetItems,
    );
  }

  override createEmptyItem(): UserDataApiModel {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      city: '',
      country: '',
      links: [],
    };
  }
}

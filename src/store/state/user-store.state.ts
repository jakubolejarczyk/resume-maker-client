import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Service } from '@angular/core';

import { UserStoreModel } from '../model/user-store.model';
import { BaseStoreState } from './base-store.state';
import { UserDataApiModel } from '../../api/model/data/user-data-api.model';
import { BaseStoreModel } from '../model/base-store.model';
import { UserStoreAction } from '../action/user-store.action';

@State<UserStoreModel>({
  name: 'userStoreState',
  defaults: BaseStoreState.initState<UserDataApiModel>([
    {
      id: 'firstName',
      label: 'First name',
      isVisible: true,
      isEditable: true,
      type: 'string',
      isArray: false,
    },
    {
      id: 'lastName',
      label: 'Last name',
      isVisible: true,
      isEditable: true,
      type: 'string',
      isArray: false,
    },
    {
      id: 'phoneNumber',
      label: 'Phone number',
      isVisible: true,
      isEditable: true,
      type: 'string',
      isArray: false,
    },
    {
      id: 'email',
      label: 'Email',
      isVisible: true,
      isEditable: true,
      type: 'string',
      isArray: false,
    },
    {
      id: 'city',
      label: 'City',
      isVisible: true,
      isEditable: true,
      type: 'string',
      isArray: false,
    },
    {
      id: 'country',
      label: 'Country',
      isVisible: true,
      isEditable: true,
      type: 'string',
      isArray: false,
    },
    {
      id: 'links',
      label: 'Links',
      isVisible: true,
      isEditable: true,
      type: 'string',
      isArray: true,
    },
  ]),
})
@Service()
export class UserStoreState extends BaseStoreState {
  @Selector()
  static getStatus(state: BaseStoreModel<UserDataApiModel>) {
    return this.baseGetStatus(state);
  }

  @Selector()
  static getIsLoading(state: BaseStoreModel<UserDataApiModel>) {
    return this.baseGetIsLoading(state);
  }

  @Selector()
  static getItems(state: BaseStoreModel<UserDataApiModel>) {
    return this.baseGetItems(state);
  }

  @Selector()
  static getSelectedItem(state: BaseStoreModel<UserDataApiModel>) {
    return this.baseGetSelectedItem(state);
  }

  @Selector()
  static getColumns(state: BaseStoreModel<UserDataApiModel>) {
    return this.baseGetColumns(state);
  }

  @Action(UserStoreAction.SetStatus)
  setStatus(
    ctx: StateContext<UserStoreModel>,
    action: UserStoreAction.SetStatus,
  ) {
    this.baseSetStatus(ctx, action);
  }

  @Action(UserStoreAction.SetIsLoading)
  setIsLoading(
    ctx: StateContext<UserStoreModel>,
    action: UserStoreAction.SetIsLoading,
  ) {
    this.baseSetIsLoading(ctx, action);
  }

  @Action(UserStoreAction.SetItems)
  setItems(
    ctx: StateContext<UserStoreModel>,
    action: UserStoreAction.SetItems,
  ) {
    this.baseSetItems(ctx, action);
  }

  @Action(UserStoreAction.SetSelectedItem)
  setSelectedItem(
    ctx: StateContext<UserStoreModel>,
    action: UserStoreAction.SetSelectedItem,
  ) {
    this.baseSetSelectedItem(ctx, action);
  }
}

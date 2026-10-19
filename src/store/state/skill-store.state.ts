import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Service } from '@angular/core';

import { SkillStoreModel } from '../model/skill-store.model';
import { BaseStoreState } from './base-store.state';
import { SkillDataApiModel } from '../../api/model/data/skill-data-api.model';
import { BaseStoreModel } from '../model/base-store.model';
import { SkillStoreAction } from '../action/skill-store.action';

@State<SkillStoreModel>({
  name: 'skillStoreState',
  defaults: BaseStoreState.initState<SkillDataApiModel>([
    {
      id: 'category',
      label: 'Category',
      isVisible: true,
      isEditable: true,
      type: 'string',
      isArray: false,
    },
    {
      id: 'skills',
      label: 'Skills',
      isVisible: true,
      isEditable: true,
      type: 'string',
      isArray: true,
    },
  ]),
})
@Service()
export class SkillStoreState extends BaseStoreState {
  @Selector()
  static getStatus(state: BaseStoreModel<SkillDataApiModel>) {
    return this.baseGetStatus(state);
  }

  @Selector()
  static getIsLoading(state: BaseStoreModel<SkillDataApiModel>) {
    return this.baseGetIsLoading(state);
  }

  @Selector()
  static getItems(state: BaseStoreModel<SkillDataApiModel>) {
    return this.baseGetItems(state);
  }

  @Selector()
  static getSelectedItem(state: BaseStoreModel<SkillDataApiModel>) {
    return this.baseGetSelectedItem(state);
  }

  @Selector()
  static getColumns(state: BaseStoreModel<SkillDataApiModel>) {
    return this.baseGetColumns(state);
  }

  @Action(SkillStoreAction.SetStatus)
  setStatus(
    ctx: StateContext<SkillStoreModel>,
    action: SkillStoreAction.SetStatus,
  ) {
    this.baseSetStatus(ctx, action);
  }

  @Action(SkillStoreAction.SetIsLoading)
  setIsLoading(
    ctx: StateContext<SkillStoreModel>,
    action: SkillStoreAction.SetIsLoading,
  ) {
    this.baseSetIsLoading(ctx, action);
  }

  @Action(SkillStoreAction.SetItems)
  setItems(
    ctx: StateContext<SkillStoreModel>,
    action: SkillStoreAction.SetItems,
  ) {
    this.baseSetItems(ctx, action);
  }

  @Action(SkillStoreAction.SetSelectedItem)
  setSelectedItem(
    ctx: StateContext<SkillStoreModel>,
    action: SkillStoreAction.SetSelectedItem,
  ) {
    this.baseSetSelectedItem(ctx, action);
  }
}

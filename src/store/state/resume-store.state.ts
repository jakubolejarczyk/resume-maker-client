import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Service } from '@angular/core';

import { ResumeStoreModel } from '../model/resume-store.model';
import { BaseStoreState } from './base-store.state';
import { ResumeDataApiModel } from '../../api/model/data/resume-data-api.model';
import { BaseStoreModel } from '../model/base-store.model';
import { ResumeStoreAction } from '../action/resume-store.action';

@State<ResumeStoreModel>({
  name: 'resumeStoreState',
  defaults: BaseStoreState.initState<ResumeDataApiModel>([
    {
      id: 'name',
      label: 'Name',
      isVisible: true,
      isEditable: true,
      type: 'string',
      isArray: false,
    },
    {
      id: 'jobTitle',
      label: 'Job title',
      isVisible: true,
      isEditable: true,
      type: 'string',
      isArray: false,
    },
    {
      id: 'summary',
      label: 'Summary',
      isVisible: true,
      isEditable: true,
      type: 'string',
      isArray: false,
    },
  ]),
})
@Service()
export class ResumeStoreState extends BaseStoreState {
  @Selector()
  static getStatus(state: BaseStoreModel<ResumeDataApiModel>) {
    return this.baseGetStatus(state);
  }

  @Selector()
  static getIsLoading(state: BaseStoreModel<ResumeDataApiModel>) {
    return this.baseGetIsLoading(state);
  }

  @Selector()
  static getItems(state: BaseStoreModel<ResumeDataApiModel>) {
    return this.baseGetItems(state);
  }

  @Selector()
  static getSelectedItem(state: BaseStoreModel<ResumeDataApiModel>) {
    return this.baseGetSelectedItem(state);
  }

  @Selector()
  static getColumns(state: BaseStoreModel<ResumeDataApiModel>) {
    return this.baseGetColumns(state);
  }

  @Action(ResumeStoreAction.SetStatus)
  setStatus(
    ctx: StateContext<ResumeStoreModel>,
    action: ResumeStoreAction.SetStatus,
  ) {
    this.baseSetStatus(ctx, action);
  }

  @Action(ResumeStoreAction.SetIsLoading)
  setIsLoading(
    ctx: StateContext<ResumeStoreModel>,
    action: ResumeStoreAction.SetIsLoading,
  ) {
    this.baseSetIsLoading(ctx, action);
  }

  @Action(ResumeStoreAction.SetItems)
  setItems(
    ctx: StateContext<ResumeStoreModel>,
    action: ResumeStoreAction.SetItems,
  ) {
    this.baseSetItems(ctx, action);
  }
}

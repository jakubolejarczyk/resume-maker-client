import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Service } from '@angular/core';

import { ExperienceStoreModel } from '../model/experience-store.model';
import { BaseStoreState } from './base-store.state';
import { ExperienceDataApiModel } from '../../api/model/data/experience-data-api.model';
import { BaseStoreModel } from '../model/base-store.model';
import { ExperienceStoreAction } from '../action/experience-store.action';

@State<ExperienceStoreModel>({
  name: 'experienceStoreState',
  defaults: BaseStoreState.initState<ExperienceDataApiModel>([
    {
      id: 'company',
      label: 'Company',
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
      id: 'description',
      label: 'Description',
      isVisible: true,
      isEditable: true,
      type: 'string',
      isArray: true,
    },
    {
      id: 'startDate',
      label: 'Start date',
      isVisible: true,
      isEditable: true,
      type: 'date',
      isArray: false,
    },
    {
      id: 'endDate',
      label: 'End date',
      isVisible: true,
      isEditable: true,
      type: 'date',
      isArray: false,
    },
  ]),
})
@Service()
export class ExperienceStoreState extends BaseStoreState {
  @Selector()
  static getStatus(state: BaseStoreModel<ExperienceDataApiModel>) {
    return this.baseGetStatus(state);
  }

  @Selector()
  static getIsLoading(state: BaseStoreModel<ExperienceDataApiModel>) {
    return this.baseGetIsLoading(state);
  }

  @Selector()
  static getItems(state: BaseStoreModel<ExperienceDataApiModel>) {
    return this.baseGetItems(state);
  }

  @Selector()
  static getSelectedItem(state: BaseStoreModel<ExperienceDataApiModel>) {
    return this.baseGetSelectedItem(state);
  }

  @Selector()
  static getColumns(state: BaseStoreModel<ExperienceDataApiModel>) {
    return this.baseGetColumns(state);
  }

  @Action(ExperienceStoreAction.SetStatus)
  setStatus(
    ctx: StateContext<ExperienceStoreModel>,
    action: ExperienceStoreAction.SetStatus,
  ) {
    this.baseSetStatus(ctx, action);
  }

  @Action(ExperienceStoreAction.SetIsLoading)
  setIsLoading(
    ctx: StateContext<ExperienceStoreModel>,
    action: ExperienceStoreAction.SetIsLoading,
  ) {
    this.baseSetIsLoading(ctx, action);
  }

  @Action(ExperienceStoreAction.SetItems)
  setItems(
    ctx: StateContext<ExperienceStoreModel>,
    action: ExperienceStoreAction.SetItems,
  ) {
    this.baseSetItems(ctx, action);
  }

  @Action(ExperienceStoreAction.SetSelectedItem)
  setSelectedItem(
    ctx: StateContext<ExperienceStoreModel>,
    action: ExperienceStoreAction.SetSelectedItem,
  ) {
    this.baseSetSelectedItem(ctx, action);
  }
}

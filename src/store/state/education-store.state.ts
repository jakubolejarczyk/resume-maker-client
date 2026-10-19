import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Service } from '@angular/core';

import { EducationStoreModel } from '../model/education-store.model';
import { BaseStoreState } from './base-store.state';
import { EducationDataApiModel } from '../../api/model/data/education-data-api.model';
import { BaseStoreModel } from '../model/base-store.model';
import { EducationStoreAction } from '../action/education-store.action';

@State<EducationStoreModel>({
  name: 'educationStoreState',
  defaults: BaseStoreState.initState<EducationDataApiModel>([
    {
      id: 'institutionName',
      label: 'Institution name',
      isVisible: true,
      isEditable: true,
      type: 'string',
      isArray: false,
    },
    {
      id: 'fieldOfStudy',
      label: 'Field of study',
      isVisible: true,
      isEditable: true,
      type: 'string',
      isArray: false,
    },
    {
      id: 'degree',
      label: 'Degree',
      isVisible: true,
      isEditable: true,
      type: 'string',
      isArray: false,
    },
    {
      id: 'startYear',
      label: 'Start year',
      isVisible: true,
      isEditable: true,
      type: 'number',
      isArray: false,
    },
    {
      id: 'endYear',
      label: 'End year',
      isVisible: true,
      isEditable: true,
      type: 'number',
      isArray: false,
    },
  ]),
})
@Service()
export class EducationStoreState extends BaseStoreState {
  @Selector()
  static getStatus(state: BaseStoreModel<EducationDataApiModel>) {
    return this.baseGetStatus(state);
  }

  @Selector()
  static getIsLoading(state: BaseStoreModel<EducationDataApiModel>) {
    return this.baseGetIsLoading(state);
  }

  @Selector()
  static getItems(state: BaseStoreModel<EducationDataApiModel>) {
    return this.baseGetItems(state);
  }

  @Selector()
  static getSelectedItem(state: BaseStoreModel<EducationDataApiModel>) {
    return this.baseGetSelectedItem(state);
  }

  @Selector()
  static getColumns(state: BaseStoreModel<EducationDataApiModel>) {
    return this.baseGetColumns(state);
  }

  @Action(EducationStoreAction.SetStatus)
  setStatus(
    ctx: StateContext<EducationStoreModel>,
    action: EducationStoreAction.SetStatus,
  ) {
    this.baseSetStatus(ctx, action);
  }

  @Action(EducationStoreAction.SetIsLoading)
  setIsLoading(
    ctx: StateContext<EducationStoreModel>,
    action: EducationStoreAction.SetIsLoading,
  ) {
    this.baseSetIsLoading(ctx, action);
  }

  @Action(EducationStoreAction.SetItems)
  setItems(
    ctx: StateContext<EducationStoreModel>,
    action: EducationStoreAction.SetItems,
  ) {
    this.baseSetItems(ctx, action);
  }

  @Action(EducationStoreAction.SetSelectedItem)
  setSelectedItem(
    ctx: StateContext<EducationStoreModel>,
    action: EducationStoreAction.SetSelectedItem,
  ) {
    this.baseSetSelectedItem(ctx, action);
  }
}

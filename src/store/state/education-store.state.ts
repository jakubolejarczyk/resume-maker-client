import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';

import { EducationStoreModel } from '../model/state/education-state-store.model';
import { BaseStoreState } from './base-store.state';
import { EducationApiModel } from '../../api/model/education-api.model';
import { BaseApiModel } from '../../api/model/base-api.model';
import { BaseStoreModel } from '../model/base/base-store.model';
import { EducationStoreAction } from '../action/education-store.action';

@State<EducationStoreModel>({
  name: 'educationStoreState',
  defaults: BaseStoreState.initState([
    {
      id: 'id',
      label: 'Id',
      isVisible: false,
      isEditable: false,
      type: 'number',
    },
    {
      id: 'institutionName',
      label: 'Institution name',
      isVisible: true,
      isEditable: true,
      type: 'string',
    },
    {
      id: 'fieldOfStudy',
      label: 'Field of study',
      isVisible: false,
      isEditable: true,
      type: 'string',
    },
    {
      id: 'degree',
      label: 'Degree',
      isVisible: false,
      isEditable: true,
      type: 'string',
    },
    {
      id: 'startYear',
      label: 'Start year',
      isVisible: false,
      isEditable: true,
      type: 'number',
    },
    {
      id: 'endYear',
      label: 'End year',
      isVisible: false,
      isEditable: true,
      type: 'number',
    },
    {
      id: 'resumeId',
      label: 'Resume id',
      isVisible: false,
      isEditable: false,
      type: 'number',
    },
    {
      id: 'order',
      label: 'Order',
      isVisible: false,
      isEditable: false,
      type: 'number',
    },
  ]),
})
@Injectable({ providedIn: 'root' })
export class EducationStoreState extends BaseStoreState<EducationApiModel> {
  @Selector()
  static override getStatus<TModel extends BaseApiModel>(
    state: BaseStoreModel<TModel>,
  ) {
    return super.getStatus(state);
  }

  @Selector()
  static override getIsLoading<TModel extends BaseApiModel>(
    state: BaseStoreModel<TModel>,
  ) {
    return super.getIsLoading(state);
  }

  @Selector()
  static override getItems<TModel extends BaseApiModel>(
    state: BaseStoreModel<TModel>,
  ) {
    return super.getItems(state);
  }

  @Selector()
  static override getSelectedItem<TModel extends BaseApiModel>(
    state: BaseStoreModel<TModel>,
  ) {
    return super.getSelectedItem(state);
  }

  @Selector()
  static override getColumns<TModel extends BaseApiModel>(
    state: BaseStoreModel<TModel>,
  ) {
    return super.getColumns(state);
  }

  @Action(EducationStoreAction.SetStatus)
  override setStatus(
    ctx: StateContext<EducationStoreModel>,
    action: EducationStoreAction.SetStatus,
  ) {
    super.setStatus(ctx, action);
  }

  @Action(EducationStoreAction.SetIsLoading)
  override setIsLoading(
    ctx: StateContext<EducationStoreModel>,
    action: EducationStoreAction.SetIsLoading,
  ) {
    super.setIsLoading(ctx, action);
  }

  @Action(EducationStoreAction.SetItems)
  override setItems(
    ctx: StateContext<EducationStoreModel>,
    action: EducationStoreAction.SetItems,
  ) {
    super.setItems(ctx, action);
  }

  @Action(EducationStoreAction.AddItem)
  override addItem(
    ctx: StateContext<EducationStoreModel>,
    action: EducationStoreAction.AddItem,
  ) {
    super.addItem(ctx, action);
  }

  @Action(EducationStoreAction.UpdateItem)
  override updateItem(
    ctx: StateContext<EducationStoreModel>,
    action: EducationStoreAction.UpdateItem,
  ) {
    super.updateItem(ctx, action);
  }

  @Action(EducationStoreAction.SetSelectedItem)
  override selectedItem(
    ctx: StateContext<EducationStoreModel>,
    action: EducationStoreAction.SetSelectedItem,
  ) {
    super.selectedItem(ctx, action);
  }
}

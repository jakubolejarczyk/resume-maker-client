import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { EducationStoreModel } from "../model/education-store.model";
import { BaseStoreState } from "./base-store.state";
import { EducationApiModel } from "../../api/model/education-api.model";
import { BaseApiModel } from "../../api/model/base-api.model";
import { BaseStoreModel } from "../model/base-store.model";
import { EducationStoreAction } from "../action/education-store.action";

@State<EducationStoreModel>({
  name: "educationStoreState",
  defaults: BaseStoreState.initState()
})
@Injectable({ providedIn: "root" })
export class EducationStoreState extends BaseStoreState<EducationApiModel> {
  @Selector()
  static override getStatus<TModel extends BaseApiModel>(state: BaseStoreModel<TModel>) {
    return super.getStatus(state);
  }

  @Selector()
  static override getIsLoading<TModel extends BaseApiModel>(state: BaseStoreModel<TModel>) {
    return super.getIsLoading(state);
  }

  @Selector()
  static override getItems<TModel extends BaseApiModel>(state: BaseStoreModel<TModel>) {
    return super.getItems(state);
  }

  @Selector()
  static override getSelectedItem<TModel extends BaseApiModel>(state: BaseStoreModel<TModel>) {
    return super.getSelectedItem(state);
  }

  @Action(EducationStoreAction.SetStatus)
  override setStatus(ctx: StateContext<EducationStoreModel>, action: EducationStoreAction.SetStatus) {
    super.setStatus(ctx, action);
  }

  @Action(EducationStoreAction.SetIsLoading)
  override setIsLoading(ctx: StateContext<EducationStoreModel>, action: EducationStoreAction.SetIsLoading) {
    super.setIsLoading(ctx, action);
  }

  @Action(EducationStoreAction.SetItems)
  override setItems(ctx: StateContext<EducationStoreModel>, action: EducationStoreAction.SetItems) {
    super.setItems(ctx, action);
  }

  @Action(EducationStoreAction.AddItem)
  override addItem(ctx: StateContext<EducationStoreModel>, action: EducationStoreAction.AddItem) {
    super.addItem(ctx, action);
  }

  @Action(EducationStoreAction.UpdateItem)
  override updateItem(ctx: StateContext<EducationStoreModel>, action: EducationStoreAction.UpdateItem) {
    super.updateItem(ctx, action);
  }

  @Action(EducationStoreAction.DeleteItem)
  override deleteItem(ctx: StateContext<EducationStoreModel>, action: EducationStoreAction.DeleteItem) {
    super.deleteItem(ctx, action);
  }

  @Action(EducationStoreAction.SetSelectedItem)
  override selectedItem(ctx: StateContext<EducationStoreModel>, action: EducationStoreAction.SetSelectedItem) {
    super.selectedItem(ctx, action);
  }
}
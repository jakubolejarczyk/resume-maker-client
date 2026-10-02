import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { ExperienceStoreModel } from "../model/experience-store.model";
import { BaseStoreState } from "./base-store.state";
import { ExperienceApiModel } from "../../api/model/experience-api.model";
import { BaseApiModel } from "../../api/model/base-api.model";
import { BaseStoreModel } from "../model/base-store.model";
import { ExperienceStoreAction } from "../action/experience-store.action";

@State<ExperienceStoreModel>({
  name: "experienceStoreState",
  defaults: {
    success: true,
    message: "",
    isLoading: false,
    items: [],
    selectedItem: undefined
  }
})
@Injectable({ providedIn: "root" })
export class ExperienceStoreState extends BaseStoreState<ExperienceApiModel> {
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

  @Action(ExperienceStoreAction.SetStatus)
  override setStatus(ctx: StateContext<ExperienceStoreModel>, action: ExperienceStoreAction.SetStatus) {
    super.setStatus(ctx, action);
  }

  @Action(ExperienceStoreAction.SetIsLoading)
  override setIsLoading(ctx: StateContext<ExperienceStoreModel>, action: ExperienceStoreAction.SetIsLoading) {
    super.setIsLoading(ctx, action);
  }

  @Action(ExperienceStoreAction.SetItems)
  override setItems(ctx: StateContext<ExperienceStoreModel>, action: ExperienceStoreAction.SetItems) {
    super.setItems(ctx, action);
  }

  @Action(ExperienceStoreAction.AddItem)
  override addItem(ctx: StateContext<ExperienceStoreModel>, action: ExperienceStoreAction.AddItem) {
    super.addItem(ctx, action);
  }

  @Action(ExperienceStoreAction.UpdateItem)
  override updateItem(ctx: StateContext<ExperienceStoreModel>, action: ExperienceStoreAction.UpdateItem) {
    super.updateItem(ctx, action);
  }

  @Action(ExperienceStoreAction.DeleteItem)
  override deleteItem(ctx: StateContext<ExperienceStoreModel>, action: ExperienceStoreAction.DeleteItem) {
    super.deleteItem(ctx, action);
  }

  @Action(ExperienceStoreAction.SetSelectedItem)
  override selectedItem(ctx: StateContext<ExperienceStoreModel>, action: ExperienceStoreAction.SetSelectedItem) {
    super.selectedItem(ctx, action);
  }
}
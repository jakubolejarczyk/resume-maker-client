import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { SkillStoreModel } from "../model/skill-store.model";
import { BaseStoreState } from "./base-store.state";
import { SkillApiModel } from "../../api/model/skill-api.model";
import { BaseApiModel } from "../../api/model/base-api.model";
import { BaseStoreModel } from "../model/base-store.model";
import { SkillStoreAction } from "../action/skill-store.action";

@State<SkillStoreModel>({
  name: "skillStoreState",
  defaults: BaseStoreState.initState([
    { id: "category", label: "Category", isVisible: true },
    { id: "skills", label: "Skills", isVisible: true }
  ])
})
@Injectable({ providedIn: "root" })
export class SkillStoreState extends BaseStoreState<SkillApiModel> {
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

  @Action(SkillStoreAction.SetStatus)
  override setStatus(ctx: StateContext<SkillStoreModel>, action: SkillStoreAction.SetStatus) {
    super.setStatus(ctx, action);
  }

  @Selector()
  static override getColumns<TModel extends BaseApiModel>(state: BaseStoreModel<TModel>) {
    return super.getColumns(state);
  }

  @Action(SkillStoreAction.SetIsLoading)
  override setIsLoading(ctx: StateContext<SkillStoreModel>, action: SkillStoreAction.SetIsLoading) {
    super.setIsLoading(ctx, action);
  }

  @Action(SkillStoreAction.SetItems)
  override setItems(ctx: StateContext<SkillStoreModel>, action: SkillStoreAction.SetItems) {
    super.setItems(ctx, action);
  }

  @Action(SkillStoreAction.AddItem)
  override addItem(ctx: StateContext<SkillStoreModel>, action: SkillStoreAction.AddItem) {
    super.addItem(ctx, action);
  }

  @Action(SkillStoreAction.UpdateItem)
  override updateItem(ctx: StateContext<SkillStoreModel>, action: SkillStoreAction.UpdateItem) {
    super.updateItem(ctx, action);
  }

  @Action(SkillStoreAction.DeleteItem)
  override deleteItem(ctx: StateContext<SkillStoreModel>, action: SkillStoreAction.DeleteItem) {
    super.deleteItem(ctx, action);
  }

  @Action(SkillStoreAction.SetSelectedItem)
  override selectedItem(ctx: StateContext<SkillStoreModel>, action: SkillStoreAction.SetSelectedItem) {
    super.selectedItem(ctx, action);
  }
}
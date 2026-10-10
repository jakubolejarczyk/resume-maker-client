import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { BaseStoreState } from "./base-store.state";
import { BaseApiModel } from "../../api/model/base-api.model";
import { BaseStoreModel } from "../model/base-store.model";
import { ResumeStoreModel } from "../model/resume-store.model";
import { ResumeApiModel } from "../../api/model/resume-api.model";
import { ResumeStoreAction } from "../action/resume-store.action";

@State<ResumeStoreModel>({
  name: "resumeStoreState",
  defaults: BaseStoreState.initState([
    { id: "id", label: "Id", isVisible: true, type: "string" },
    { id: "name", label: "Name", isVisible: true, type: "string" },
    { id: "order", label: "Order", isVisible: true, type: "string" },
    { id: "userId", label: "User Id", isVisible: true, type: "string" }
  ])
})
@Injectable({ providedIn: "root" })
export class ResumeStoreState extends BaseStoreState<ResumeApiModel> {
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

  @Selector()
  static override getColumns<TModel extends BaseApiModel>(state: BaseStoreModel<TModel>) {
    return super.getColumns(state);
  }

  @Action(ResumeStoreAction.SetStatus)
  override setStatus(ctx: StateContext<ResumeStoreModel>, action: ResumeStoreAction.SetStatus) {
    super.setStatus(ctx, action);
  }

  @Action(ResumeStoreAction.SetIsLoading)
  override setIsLoading(ctx: StateContext<ResumeStoreModel>, action: ResumeStoreAction.SetIsLoading) {
    super.setIsLoading(ctx, action);
  }

  @Action(ResumeStoreAction.SetItems)
  override setItems(ctx: StateContext<ResumeStoreModel>, action: ResumeStoreAction.SetItems) {
    super.setItems(ctx, action);
  }

  @Action(ResumeStoreAction.AddItem)
  override addItem(ctx: StateContext<ResumeStoreModel>, action: ResumeStoreAction.AddItem) {
    super.addItem(ctx, action);
  }

  @Action(ResumeStoreAction.UpdateItem)
  override updateItem(ctx: StateContext<ResumeStoreModel>, action: ResumeStoreAction.UpdateItem) {
    super.updateItem(ctx, action);
  }

  @Action(ResumeStoreAction.DeleteItem)
  override deleteItem(ctx: StateContext<ResumeStoreModel>, action: ResumeStoreAction.DeleteItem) {
    super.deleteItem(ctx, action);
  }

  @Action(ResumeStoreAction.SetSelectedItem)
  override selectedItem(ctx: StateContext<ResumeStoreModel>, action: ResumeStoreAction.SetSelectedItem) {
    super.selectedItem(ctx, action);
  }
}
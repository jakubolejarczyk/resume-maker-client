import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { UserStoreModel } from "../model/user-store.model";
import { BaseStoreState } from "./base-store.state";
import { UserApiModel } from "../../api/model/user-api.model";
import { BaseApiModel } from "../../api/model/base-api.model";
import { BaseStoreModel } from "../model/base-store.model";
import { UserStoreAction } from "../action/user-store.action";

@State<UserStoreModel>({
  name: "userStoreState",
  defaults: BaseStoreState.initState([
    { id: "id", label: "Id", isVisible: true, type: "string" },
    { id: "firstName", label: "First Name", isVisible: true, type: "string" },
    { id: "lastName", label: "Last Name", isVisible: true, type: "string" },
    { id: "jobTitle", label: "Job Title", isVisible: true, type: "string" },
    { id: "phoneNumber", label: "Phone Number", isVisible: true, type: "string" },
    { id: "email", label: "Email", isVisible: true, type: "string" },
    { id: "city", label: "City", isVisible: true, type: "string" },
    { id: "country", label: "Country", isVisible: true, type: "string" },
    { id: "summary", label: "Summary", isVisible: true, type: "string" },
    { id: "order", label: "Order", isVisible: true, type: "string" }
  ])
})
@Injectable({ providedIn: "root" })
export class UserStoreState extends BaseStoreState<UserApiModel> {
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

  @Action(UserStoreAction.SetStatus)
  override setStatus(ctx: StateContext<UserStoreModel>, action: UserStoreAction.SetStatus) {
    super.setStatus(ctx, action);
  }

  @Action(UserStoreAction.SetIsLoading)
  override setIsLoading(ctx: StateContext<UserStoreModel>, action: UserStoreAction.SetIsLoading) {
    super.setIsLoading(ctx, action);
  }

  @Action(UserStoreAction.SetItems)
  override setItems(ctx: StateContext<UserStoreModel>, action: UserStoreAction.SetItems) {
    super.setItems(ctx, action);
  }

  @Action(UserStoreAction.AddItem)
  override addItem(ctx: StateContext<UserStoreModel>, action: UserStoreAction.AddItem) {
    super.addItem(ctx, action);
  }

  @Action(UserStoreAction.UpdateItem)
  override updateItem(ctx: StateContext<UserStoreModel>, action: UserStoreAction.UpdateItem) {
    super.updateItem(ctx, action);
  }

  @Action(UserStoreAction.DeleteItem)
  override deleteItem(ctx: StateContext<UserStoreModel>, action: UserStoreAction.DeleteItem) {
    super.deleteItem(ctx, action);
  }

  @Action(UserStoreAction.SetSelectedItem)
  override selectedItem(ctx: StateContext<UserStoreModel>, action: UserStoreAction.SetSelectedItem) {
    super.selectedItem(ctx, action);
  }
}
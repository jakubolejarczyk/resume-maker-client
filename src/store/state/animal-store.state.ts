import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { BaseStoreState } from "./base-store.state";
import { BaseApiModel } from "../../api/model/base-api.model";
import { BaseStoreModel } from "../model/base-store.model";
import { AnimalStoreModel } from "../model/animal-store.model";
import { AnimalApiModel } from "../../api/model/animal-api.model";
import { AnimalStoreAction } from "../action/animal-store.action";

@State<AnimalStoreModel>({
  name: "animalStoreState",
  defaults: BaseStoreState.initState([
    { id: "id", label: "Id", isVisible: true },
    { id: "name", label: "Name", isVisible: true }
  ])
})
@Injectable()
export class AnimalStoreState extends BaseStoreState<AnimalApiModel> {
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

  @Action(AnimalStoreAction.SetStatus)
  override setStatus(ctx: StateContext<AnimalStoreModel>, action: AnimalStoreAction.SetStatus) {
    super.setStatus(ctx, action);
  }

  @Action(AnimalStoreAction.SetIsLoading)
  override setIsLoading(ctx: StateContext<AnimalStoreModel>, action: AnimalStoreAction.SetIsLoading) {
    super.setIsLoading(ctx, action);
  }

  @Action(AnimalStoreAction.SetItems)
  override setItems(ctx: StateContext<AnimalStoreModel>, action: AnimalStoreAction.SetItems) {
    super.setItems(ctx, action);
  }

  @Action(AnimalStoreAction.AddItem)
  override addItem(ctx: StateContext<AnimalStoreModel>, action: AnimalStoreAction.AddItem) {
    super.addItem(ctx, action);
  }

  @Action(AnimalStoreAction.UpdateItem)
  override updateItem(ctx: StateContext<AnimalStoreModel>, action: AnimalStoreAction.UpdateItem) {
    super.updateItem(ctx, action);
  }

  @Action(AnimalStoreAction.DeleteItem)
  override deleteItem(ctx: StateContext<AnimalStoreModel>, action: AnimalStoreAction.DeleteItem) {
    super.deleteItem(ctx, action);
  }

  @Action(AnimalStoreAction.SetSelectedItem)
  override selectedItem(ctx: StateContext<AnimalStoreModel>, action: AnimalStoreAction.SetSelectedItem) {
    super.selectedItem(ctx, action);
  }
}
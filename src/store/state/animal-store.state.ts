import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { AnimalStoreModel } from "../model/animal-store.model";
import { AnimalStoreAction } from "../action/animal-store.action";

@State<AnimalStoreModel>({
  name: "animalStoreState",
  defaults: {
    success: true,
    message: "",
    loading: false,
    items: [],
    selectedItem: undefined
  }
})
@Injectable({ providedIn: "root" })
export class AnimalStoreState {
  @Selector()
  static getStatus(state: AnimalStoreModel) {
    const { success, message } = state;
    return { success, message };
  }
  
  @Selector()
  static getLoading(state: AnimalStoreModel) {
    return state.loading;
  }
  
  @Selector()
  static getItems(state: AnimalStoreModel) {
    return state.items;
  }

  @Selector()
  static getSelectedItem(state: AnimalStoreModel) {
    return state.selectedItem;
  }

  @Action(AnimalStoreAction.SetLoading)
  setLoading(ctx: StateContext<AnimalStoreModel>, action: AnimalStoreAction.SetLoading) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      loading: action.isLoading
    });
  }

  @Action(AnimalStoreAction.SetStatus)
  setStatus(ctx: StateContext<AnimalStoreModel>, action: AnimalStoreAction.SetStatus) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      success: action.success,
      message: action.message
    });
  }

  @Action(AnimalStoreAction.AddItem)
  addItem(ctx: StateContext<AnimalStoreModel>, action: AnimalStoreAction.AddItem) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: [...state.items, action.item]
    });
  }
}
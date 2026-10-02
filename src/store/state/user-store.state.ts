import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { UserStoreModel } from "../model/user-store.model";
import { UserStoreAction } from "../action/user-store.action";

@State<UserStoreModel>({
  name: "userStoreState",
  defaults: {
    success: true,
    message: "",
    isLoading: false,
    items: [],
    selectedItem: undefined
  }
})
@Injectable({ providedIn: "root" })
export class UserStoreState {
  @Selector()
  static getStatus(state: UserStoreModel) {
    return {
      success: state.success,
      message: state.message
    };
  }
  
  @Selector()
  static getIsLoading(state: UserStoreModel) {
    return state.isLoading;
  }

  @Selector()
  static getItems(state: UserStoreModel) {
    return state.items;
  }
  
  @Selector()
  static getSelectedItem(state: UserStoreModel) {
    return state.selectedItem;
  }

  @Action(UserStoreAction.SetStatus)
  setStatus(ctx: StateContext<UserStoreModel>, action: UserStoreAction.SetStatus) {
    const state = ctx.getState();
    ctx.setState({ ...state, success: action.success, message: action.message });
  }

  @Action(UserStoreAction.SetIsLoading)
  setIsLoading(ctx: StateContext<UserStoreModel>, action: UserStoreAction.SetIsLoading) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      isLoading: action.isLoading
    });
  }

  @Action(UserStoreAction.SetItems)
  setItems(ctx: StateContext<UserStoreModel>, action: UserStoreAction.SetItems) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: action.items
    });
  }

  @Action(UserStoreAction.AddItem)
  addItem(ctx: StateContext<UserStoreModel>, action: UserStoreAction.AddItem) {
    const state = ctx.getState();
    const actionItemExistsInState = state.items.find(item => item.id === action.item.id);
    if (actionItemExistsInState) return;
    ctx.setState({
      ...state,
      items: [...state.items, action.item]
    });
  }

  @Action(UserStoreAction.UpdateItem)
  updateItem(ctx: StateContext<UserStoreModel>, action: UserStoreAction.UpdateItem) {
    const state = ctx.getState();
    const actionItemNotExistInState = !state.items.find(item => item.id === action.item.id);
    if (actionItemNotExistInState) return;
    ctx.setState({
      ...state,
      items: state.items.map(item => item.id === action.item.id ? action.item : item)
    });
  }

  @Action(UserStoreAction.DeleteItem)
  deleteItem(ctx: StateContext<UserStoreModel>, action: UserStoreAction.DeleteItem) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: state.items.filter(item => item.id !== action.id)
    });
  }

  @Action(UserStoreAction.SetSelectedItem)
  selectedItem(ctx: StateContext<UserStoreModel>, action: UserStoreAction.SetSelectedItem) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      selectedItem: action.selectedItem
    });
  }
}
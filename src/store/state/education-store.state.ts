import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { EducationStoreModel } from "../model/education-store.model";
import { EducationStoreAction } from "../action/education-store.action";

@State<EducationStoreModel>({
  name: "educationStoreState",
  defaults: {
    success: true,
    message: "",
    isLoading: false,
    items: [],
    selectedItem: undefined
  }
})
@Injectable({ providedIn: "root" })
export class EducationStoreState {
  @Selector()
  static getStatus(state: EducationStoreModel) {
    return {
      success: state.success,
      message: state.message
    };
  }
  
  @Selector()
  static getIsLoading(state: EducationStoreModel) {
    return state.isLoading;
  }

  @Selector()
  static getItems(state: EducationStoreModel) {
    return state.items;
  }
  
  @Selector()
  static getSelectedItem(state: EducationStoreModel) {
    return state.selectedItem;
  }

  @Action(EducationStoreAction.SetStatus)
  setStatus(ctx: StateContext<EducationStoreModel>, action: EducationStoreAction.SetStatus) {
    const state = ctx.getState();
    ctx.setState({ ...state, success: action.success, message: action.message });
  }

  @Action(EducationStoreAction.SetIsLoading)
  setIsLoading(ctx: StateContext<EducationStoreModel>, action: EducationStoreAction.SetIsLoading) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      isLoading: action.isLoading
    });
  }

  @Action(EducationStoreAction.SetItems)
  setItems(ctx: StateContext<EducationStoreModel>, action: EducationStoreAction.SetItems) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: action.items
    });
  }

  @Action(EducationStoreAction.AddItem)
  addItem(ctx: StateContext<EducationStoreModel>, action: EducationStoreAction.AddItem) {
    const state = ctx.getState();
    const actionItemExistsInState = state.items.find(item => item.id === action.item.id);
    if (actionItemExistsInState) return;
    ctx.setState({
      ...state,
      items: [...state.items, action.item]
    });
  }

  @Action(EducationStoreAction.UpdateItem)
  updateItem(ctx: StateContext<EducationStoreModel>, action: EducationStoreAction.UpdateItem) {
    const state = ctx.getState();
    const actionItemNotExistInState = !state.items.find(item => item.id === action.item.id);
    if (actionItemNotExistInState) return;
    ctx.setState({
      ...state,
      items: state.items.map(item => item.id === action.item.id ? action.item : item)
    });
  }

  @Action(EducationStoreAction.DeleteItem)
  deleteItem(ctx: StateContext<EducationStoreModel>, action: EducationStoreAction.DeleteItem) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: state.items.filter(item => item.id !== action.id)
    });
  }

  @Action(EducationStoreAction.SetSelectedItem)
  selectedItem(ctx: StateContext<EducationStoreModel>, action: EducationStoreAction.SetSelectedItem) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      selectedItem: action.selectedItem
    });
  }
}
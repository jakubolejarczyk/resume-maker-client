import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { ExperienceStoreModel } from "../model/experience-store.model";
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
export class ExperienceStoreState {
  @Selector()
  static getStatus(state: ExperienceStoreModel) {
    return {
      success: state.success,
      message: state.message
    };
  }
  
  @Selector()
  static getIsLoading(state: ExperienceStoreModel) {
    return state.isLoading;
  }

  @Selector()
  static getItems(state: ExperienceStoreModel) {
    return state.items;
  }
  
  @Selector()
  static getSelectedItem(state: ExperienceStoreModel) {
    return state.selectedItem;
  }

  @Action(ExperienceStoreAction.SetStatus)
  setStatus(ctx: StateContext<ExperienceStoreModel>, action: ExperienceStoreAction.SetStatus) {
    const state = ctx.getState();
    ctx.setState({ ...state, success: action.success, message: action.message });
  }

  @Action(ExperienceStoreAction.SetIsLoading)
  setIsLoading(ctx: StateContext<ExperienceStoreModel>, action: ExperienceStoreAction.SetIsLoading) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      isLoading: action.isLoading
    });
  }

  @Action(ExperienceStoreAction.SetItems)
  setItems(ctx: StateContext<ExperienceStoreModel>, action: ExperienceStoreAction.SetItems) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: action.items
    });
  }

  @Action(ExperienceStoreAction.AddItem)
  addItem(ctx: StateContext<ExperienceStoreModel>, action: ExperienceStoreAction.AddItem) {
    const state = ctx.getState();
    const actionItemExistsInState = state.items.find(item => item.id === action.item.id);
    if (actionItemExistsInState) return;
    ctx.setState({
      ...state,
      items: [...state.items, action.item]
    });
  }

  @Action(ExperienceStoreAction.UpdateItem)
  updateItem(ctx: StateContext<ExperienceStoreModel>, action: ExperienceStoreAction.UpdateItem) {
    const state = ctx.getState();
    const actionItemNotExistInState = !state.items.find(item => item.id === action.item.id);
    if (actionItemNotExistInState) return;
    ctx.setState({
      ...state,
      items: state.items.map(item => item.id === action.item.id ? action.item : item)
    });
  }

  @Action(ExperienceStoreAction.DeleteItem)
  deleteItem(ctx: StateContext<ExperienceStoreModel>, action: ExperienceStoreAction.DeleteItem) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: state.items.filter(item => item.id !== action.id)
    });
  }

  @Action(ExperienceStoreAction.SetSelectedItem)
  selectedItem(ctx: StateContext<ExperienceStoreModel>, action: ExperienceStoreAction.SetSelectedItem) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      selectedItem: action.selectedItem
    });
  }
}
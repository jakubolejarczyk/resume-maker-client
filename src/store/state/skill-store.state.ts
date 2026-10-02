import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { SkillStoreModel } from "../model/skill-store.model";
import { SkillStoreAction } from "../action/skill-store.action";

@State<SkillStoreModel>({
  name: "skillStoreState",
  defaults: {
    success: true,
    message: "",
    isLoading: false,
    items: [],
    selectedItem: undefined
  }
})
@Injectable({ providedIn: "root" })
export class SkillStoreState {
  @Selector()
  static getStatus(state: SkillStoreModel) {
    return {
      success: state.success,
      message: state.message
    };
  }
  
  @Selector()
  static getIsLoading(state: SkillStoreModel) {
    return state.isLoading;
  }

  @Selector()
  static getItems(state: SkillStoreModel) {
    return state.items;
  }
  
  @Selector()
  static getSelectedItem(state: SkillStoreModel) {
    return state.selectedItem;
  }

  @Action(SkillStoreAction.SetStatus)
  setStatus(ctx: StateContext<SkillStoreModel>, action: SkillStoreAction.SetStatus) {
    const state = ctx.getState();
    ctx.setState({ ...state, success: action.success, message: action.message });
  }

  @Action(SkillStoreAction.SetIsLoading)
  setIsLoading(ctx: StateContext<SkillStoreModel>, action: SkillStoreAction.SetIsLoading) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      isLoading: action.isLoading
    });
  }

  @Action(SkillStoreAction.SetItems)
  setItems(ctx: StateContext<SkillStoreModel>, action: SkillStoreAction.SetItems) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: action.items
    });
  }

  @Action(SkillStoreAction.AddItem)
  addItem(ctx: StateContext<SkillStoreModel>, action: SkillStoreAction.AddItem) {
    const state = ctx.getState();
    const actionItemExistsInState = state.items.find(item => item.id === action.item.id);
    if (actionItemExistsInState) return;
    ctx.setState({
      ...state,
      items: [...state.items, action.item]
    });
  }

  @Action(SkillStoreAction.UpdateItem)
  updateItem(ctx: StateContext<SkillStoreModel>, action: SkillStoreAction.UpdateItem) {
    const state = ctx.getState();
    const actionItemNotExistInState = !state.items.find(item => item.id === action.item.id);
    if (actionItemNotExistInState) return;
    ctx.setState({
      ...state,
      items: state.items.map(item => item.id === action.item.id ? action.item : item)
    });
  }

  @Action(SkillStoreAction.DeleteItem)
  deleteItem(ctx: StateContext<SkillStoreModel>, action: SkillStoreAction.DeleteItem) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: state.items.filter(item => item.id !== action.id)
    });
  }

  @Action(SkillStoreAction.SetSelectedItem)
  selectedItem(ctx: StateContext<SkillStoreModel>, action: SkillStoreAction.SetSelectedItem) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      selectedItem: action.selectedItem
    });
  }
}
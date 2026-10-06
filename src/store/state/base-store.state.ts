import { Injectable } from "@angular/core";
import { StateContext } from "@ngxs/store";

import { BaseStoreModel } from "../model/base-store.model";
import { BaseApiModel } from "../../api/model/base-api.model";
import { BaseStoreAction } from "../action/base-store.action";

@Injectable()
export class BaseStoreState<TModel extends BaseApiModel> {
  static initState<TItem>(columns: string[]): BaseStoreModel<TItem> {
    return {
      success: true,
      message: "",
      isLoading: false,
      items: [],
      selectedItem: undefined,
      columns
    };
  }

  static getStatus<TModel extends BaseApiModel>(state: BaseStoreModel<TModel>) {
    return {
      success: state.success,
      message: state.message
    };
  }

  static getIsLoading<TModel extends BaseApiModel>(state: BaseStoreModel<TModel>) {
    return state.isLoading;
  }

  static getItems<TModel extends BaseApiModel>(state: BaseStoreModel<TModel>) {
    return state.items;
  }

  static getSelectedItem<TModel extends BaseApiModel>(state: BaseStoreModel<TModel>) {
    return state.selectedItem;
  }

  static getColumns<TModel extends BaseApiModel>(state: BaseStoreModel<TModel>) {
    return state.columns;
  }

  setStatus(ctx: StateContext<BaseStoreModel<TModel>>, action: BaseStoreAction.SetStatus) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      success: action.success,
      message: action.message
    });
  }

  setIsLoading(ctx: StateContext<BaseStoreModel<TModel>>, action: BaseStoreAction.SetIsLoading) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      isLoading: action.isLoading
    });
  }

  setItems(ctx: StateContext<BaseStoreModel<TModel>>, action: BaseStoreAction.SetItems<TModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: action.items
    });
  }

  addItem(ctx: StateContext<BaseStoreModel<TModel>>, action: BaseStoreAction.AddItem<TModel>) {
    const state = ctx.getState();
    const actionItemExistsInState = state.items.find(item => item.id === action.item.id);
    if (actionItemExistsInState) return;
    ctx.setState({
      ...state,
      items: [...state.items, action.item]
    });
  }

  updateItem(ctx: StateContext<BaseStoreModel<TModel>>, action: BaseStoreAction.UpdateItem<TModel>) {
    const state = ctx.getState();
    const actionItemNotExistInState = !state.items.find(item => item.id === action.item.id);
    if (actionItemNotExistInState) return;
    ctx.setState({
      ...state,
      items: state.items.map(item => item.id === action.item.id ? action.item : item)
    });
  }

  deleteItem(ctx: StateContext<BaseStoreModel<TModel>>, action: BaseStoreAction.DeleteItem) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: state.items.filter(item => item.id !== action.id)
    });
  }

  selectedItem(ctx: StateContext<BaseStoreModel<TModel>>, action: BaseStoreAction.SetSelectedItem<TModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      selectedItem: action.selectedItem
    });
  }
}
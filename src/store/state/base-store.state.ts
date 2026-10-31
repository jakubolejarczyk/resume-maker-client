import { StateContext } from '@ngxs/store';

import { BaseStoreModel } from '../model/base-store.model';
import { BaseStoreAction } from '../action/base-store.action';

export class BaseStoreState {
  static initState<TItem>(
    columns: BaseStoreModel<TItem>['columns'],
  ): BaseStoreModel<TItem> {
    return {
      success: true,
      message: '',
      isLoading: false,
      items: [],
      columns,
    };
  }

  static baseGetStatus<TItem>(state: BaseStoreModel<TItem>) {
    return {
      success: state.success,
      message: state.message,
    };
  }

  static baseGetIsLoading<TItem>(state: BaseStoreModel<TItem>) {
    return state.isLoading;
  }

  static baseGetItems<TItem>(state: BaseStoreModel<TItem>) {
    return state.items;
  }

  static baseGetSelectedItem<TItem>(state: BaseStoreModel<TItem>) {
    return state.items.find((item) => item.metadata.isSelected) || null;
  }

  static baseGetColumns<TItem>(state: BaseStoreModel<TItem>) {
    return state.columns;
  }

  baseSetStatus<TItem>(
    ctx: StateContext<BaseStoreModel<TItem>>,
    action: BaseStoreAction.SetStatus,
  ) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      success: action.success,
      message: action.message,
    });
  }

  baseSetIsLoading<TItem>(
    ctx: StateContext<BaseStoreModel<TItem>>,
    action: BaseStoreAction.SetIsLoading,
  ) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      isLoading: action.isLoading,
    });
  }

  baseSetItems<TItem>(
    ctx: StateContext<BaseStoreModel<TItem>>,
    action: BaseStoreAction.SetItems<TItem>,
  ) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: action.items,
    });
  }
}

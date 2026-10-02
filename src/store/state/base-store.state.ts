import { Injectable } from "@angular/core";
import { StateContext } from "@ngxs/store";

import { BaseStoreModel } from "../model/base-store.model";

@Injectable()
export class BaseStoreState {
  static baseGetIsLoading<TItem>(state: BaseStoreModel<TItem>) {
    return state.isLoading;
  }

  protected baseSetIsLoading<TItem>(ctx: StateContext<BaseStoreModel<TItem>>, isLoading: boolean) {
    const state = ctx.getState();
    ctx.setState({ ...state, isLoading });
  }
}
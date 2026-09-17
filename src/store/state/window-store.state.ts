import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { WindowStoreModel } from "../model/window-store.model";
import { MOBILE_S } from "../../const/window-width.const";
import { SetWindowWidth } from "../action/window-store.action";

@State<WindowStoreModel>({
  name: "windowStoreState",
  defaults: {
    width: MOBILE_S
  }
})
@Injectable({ providedIn: "root" })
export class WindowStoreState {
  @Selector()
  static getWidth(state: WindowStoreModel) {
    return state.width;
  }
  
  @Action(SetWindowWidth)
  setWindowWidth(context: StateContext<WindowStoreModel>, action: SetWindowWidth) {
    const state = context.getState();
    context.setState({ ...state, width: action.width });
  }
}
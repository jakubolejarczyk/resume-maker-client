import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { ScreenStoreModel } from "../model/screen-store.model";
import { SetScreenSize } from "../action/screen-store.action";

@State<ScreenStoreModel>({
  name: "screenStoreState",
  defaults: {
    screenSize: 0
  }
})
@Injectable({ providedIn: "root" })
export class ScreenStoreState {
  @Selector()
  static getScreenSize(state: ScreenStoreModel) {
    return state.screenSize;
  }
  
  @Action(SetScreenSize)
  setScreenSize(context: StateContext<ScreenStoreModel>, action: SetScreenSize) {
    const state = context.getState();
    context.setState({
      ...state,
      screenSize: action.screenSize
    });
  }
}
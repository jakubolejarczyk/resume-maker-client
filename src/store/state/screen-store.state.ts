import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { ScreenStoreModel } from "../model/screen-store.model";
import { SetScreenType } from "../action/screen-store.action";

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
  
  @Action(SetScreenType)
  setScreenType(context: StateContext<ScreenStoreModel>, action: SetScreenType) {
    const state = context.getState();
    context.setState({
      ...state,
      screenSize: action.screenSize
    });
  }
}
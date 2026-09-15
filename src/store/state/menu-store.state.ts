import { Action, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { MenuStoreModel } from "../model/menu-store.model";
import { SwitchMainMenuIsOpen } from "../action/menu-store.action";

@State<MenuStoreModel>({
  name: "menuStoreState",
  defaults: {
    mainMenuIsOpen: false
  }
})
@Injectable({ providedIn: "root" })
export class MenuStoreState {
  @Action(SwitchMainMenuIsOpen)
  switchMainMenuIsOpen(context: StateContext<MenuStoreModel>) {
    const state = context.getState();
    context.setState({
      ...state,
      mainMenuIsOpen: !state.mainMenuIsOpen
    });
  }
}
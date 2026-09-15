import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { MenuStoreModel } from "../model/menu-store.model";
import { SwitchMainMenuIsOpen } from "../action/menu-store.action";

@State<MenuStoreModel>({
  name: "menuStoreState",
  defaults: {
    mainMenuIsOpen: false,
    options: [
      {
        id: "users",
        label: "Users",
        link: "/users"
      },
      {
        id: "companies",
        label: "Companies",
        link: "/companies"
      },
      {
        id: "resumes",
        label: "Resumes",
        link: "/resumes"
      }
    ]
  }
})
@Injectable({ providedIn: "root" })
export class MenuStoreState {
  @Selector()
  static getMainMenuIsOpen(state: MenuStoreModel) {
    return state.mainMenuIsOpen;
  }

  @Selector()
  static getOptions(state: MenuStoreModel) {
    return state.options;
  }

  @Action(SwitchMainMenuIsOpen)
  switchMainMenuIsOpen(context: StateContext<MenuStoreModel>) {
    const state = context.getState();
    context.setState({
      ...state,
      mainMenuIsOpen: !state.mainMenuIsOpen
    });
  }
}
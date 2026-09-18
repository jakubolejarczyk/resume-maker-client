import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { NavStoreModel } from "../model/nav-store.model";
import { SetMenuIsOpen, SwitchMenuIsOpen } from "../action/nav-store.action";

@State<NavStoreModel>({
  name: "navStoreState",
  defaults: {
    menuIsOpen: false,
    options: [
      {
        id: "users",
        label: "Users",
        link: "/users",
        isActive: true
      },
      {
        id: "companies",
        label: "Companies",
        link: "/comapnies",
        isActive: true
      },
      {
        id: "resumes",
        label: "Resumes",
        link: "/resumes",
        isActive: true
      }
    ]
  }
})
@Injectable({ providedIn: "root" })
export class NavStoreState {
  @Selector()
  static getMenuIsOpen(state: NavStoreModel) {
    return state.menuIsOpen;
  }

  @Selector()
  static getOptions(state: NavStoreModel) {
    return state.options;
  }

  @Action(SwitchMenuIsOpen)
  switchMenuIsOpen(context: StateContext<NavStoreModel>) {
    const state = context.getState();
    context.setState({
      ...state,
      menuIsOpen: !state.menuIsOpen
    });
  }

  @Action(SetMenuIsOpen)
  setMenuIsOpen(context: StateContext<NavStoreModel>, action: SetMenuIsOpen) {
    const state = context.getState();
    context.setState({
      ...state,
      menuIsOpen: action.menuIsOpen
    });
  }
}
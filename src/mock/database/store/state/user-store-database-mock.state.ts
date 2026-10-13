import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { UserStoreDatabaseMockModel } from "../model/user-store-database-mock.model";
import { UserStoreDatabaseMockAction } from "../action/user-store-database-mock.action";
import { USER_0 } from "../../const/user-database-mock.const";

@State<UserStoreDatabaseMockModel>({
  name: "userStoreDatabaseMockState",
  defaults: [USER_0]
})
@Injectable({ providedIn: "root" })
export class UserStoreDatabaseMockState {
  @Selector()
  static getUsers(state: UserStoreDatabaseMockModel) {
    return state;
  }

  @Action(UserStoreDatabaseMockAction.Delete)
  delete(context: StateContext<UserStoreDatabaseMockModel>, action: UserStoreDatabaseMockAction.Delete) {
    const state = context.getState();
    const newState = state.filter(user => user.id !== action.id);
    context.setState(newState);
  }
}
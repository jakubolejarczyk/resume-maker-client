import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { UserStoreDatabaseMockModel } from "../model/user-store-database-mock.model";
import { UserStoreDatabaseMockAction } from "../action/user-store-database-mock.action";
import { UserDatabaseMockConst } from "../../const/user-database-mock.const";

@State<UserStoreDatabaseMockModel>({
  name: "userStoreDatabaseMockState",
  defaults: [
    UserDatabaseMockConst.USER_PERSONAL_0,
    UserDatabaseMockConst.USER_TEST_1
  ]
})
@Injectable({ providedIn: "root" })
export class UserStoreDatabaseMockState {
  @Selector()
  static getUsers(state: UserStoreDatabaseMockModel) {
    return state;
  }

  @Action(UserStoreDatabaseMockAction.DeleteByIds)
  deleteByIds(context: StateContext<UserStoreDatabaseMockModel>, action: UserStoreDatabaseMockAction.DeleteByIds) {
    const state = context.getState();
    const newState = state.filter(user => !action.ids.includes(user.id));
    context.setState(newState);
  }
}
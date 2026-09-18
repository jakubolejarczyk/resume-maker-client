import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { UserStoreModel } from "../model/user-store.model";
import { usersMock } from "../../mock/users.mock";
import { DeleteUser } from "../action/user-store.action";

@State<UserStoreModel>({
  name: "userStoreState",
  defaults: {
    selectedUserId: 0,
    users: usersMock
  }
})
@Injectable({ providedIn: "root" })
export class UserStoreState {
  @Selector()
  static getUsers(state: UserStoreModel) {
    return state.users;
  }

  @Action(DeleteUser)
  deleteUser(context: StateContext<UserStoreModel>, action: DeleteUser) {
    const state = context.getState();
    context.setState({
      ...state,
      users: state.users.filter(user => user.id !== action.id)
    });
  }
}
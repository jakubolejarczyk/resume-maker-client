import { Selector, State } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { UserStoreModel } from "../model/user-store.model";
import { usersMock } from "../../mock/users.mock";

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
}
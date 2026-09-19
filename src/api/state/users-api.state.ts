import { Action, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { UsersApiModel } from "../model/users-api.model";
import { UsersApiAction } from "../action/users-api.action";
import { USERS_API_MOCK } from "../mock/users-api.mock";

@State<UsersApiModel>({ name: "usersApiState" })
@Injectable({ providedIn: "root" })
export class UsersApiState {
  @Action(UsersApiAction.Init)
  init(context: StateContext<UsersApiModel>) {
    context.setState(USERS_API_MOCK);
  }
}
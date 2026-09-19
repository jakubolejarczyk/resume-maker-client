import { Action, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { UsersStoreModel } from "../model/users-store.model";
import { UsersActionStore } from "./users-action.store";
import { USERS_DTO_MOCK } from "../mock/users-dto.mock";

@State<UsersStoreModel>({
  name: "usersStateStore"
})
@Injectable({ providedIn: "root" })
export class UsersStateStore {
  @Action(UsersActionStore.InitDto)
  initDto(context: StateContext<UsersStoreModel>) {
    const state = context.getState();
    context.setState({ ...state, dto: USERS_DTO_MOCK });
  }
}
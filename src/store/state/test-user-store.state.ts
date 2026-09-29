import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { TestUserStoreModel } from "../model/test-user-store.model";
import { ReadAllTestUserStoreAction } from "../action/test-user-store.action";

@State<TestUserStoreModel>({
  name: "testUserStoreState",
  defaults: {
    testUsers: []
  }
})
@Injectable({ providedIn: "root" })
export class TestUserStoreState {
  @Selector()
  static getTestUsers(state: TestUserStoreModel) {
    return state.testUsers;
  }

  @Action(ReadAllTestUserStoreAction)
  readAll(context: StateContext<TestUserStoreModel>, action: ReadAllTestUserStoreAction) {
    const state = context.getState();
    context.setState({ ...state, testUsers: action.items });
  }
}
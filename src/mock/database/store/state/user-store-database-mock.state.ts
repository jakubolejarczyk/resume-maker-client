import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { UserStoreDatabaseMockModel } from "../model/user-store-database-mock.model";
import { UserDatabaseMockConst } from "../../const/user-database-mock.const";
import { BaseStoreDatabaseMockState } from "./base-store-database-mock.state";
import { UserDatabaseMockModel } from "../../model/user-database-mock.model";
import { UserStoreDatabaseMockAction } from "../action/user-store-database-mock.action";

@State<UserStoreDatabaseMockModel>({
  name: "userStoreDatabaseMockState",
  defaults: {
    items: [
      UserDatabaseMockConst.USER_PERSONAL_0,
      UserDatabaseMockConst.USER_TEST_1
    ]
  }
})
@Injectable({ providedIn: "root" })
export class UserStoreDatabaseMockState extends BaseStoreDatabaseMockState<UserDatabaseMockModel> {
  @Selector()
  static getItems(state: UserStoreDatabaseMockModel): UserDatabaseMockModel[] {
    return super.baseGetItems(state);
  }

  @Action(UserStoreDatabaseMockAction.DeleteByIds)
  deleteByIds(context: StateContext<UserStoreDatabaseMockModel>, action: UserStoreDatabaseMockAction.DeleteByIds) {
    super.baseDeleteByIds(context, action);  
  }

  @Action(UserStoreDatabaseMockAction.DeleteByParentIds)
  deleteByParentIds(context: StateContext<UserStoreDatabaseMockModel>, action: UserStoreDatabaseMockAction.DeleteByParentIds) {
    super.baseDeleteByParentIds(context, action);  
  }
}
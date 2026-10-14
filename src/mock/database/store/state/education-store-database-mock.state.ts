import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { EducationStoreDatabaseMockModel } from "../model/education-store-database-mock.model";
import { EducationDatabaseMockConst } from "../../const/education-database-mock.const";
import { BaseStoreDatabaseMockState } from "./base-store-database-mock.state";
import { EducationDatabaseMockModel } from "../../model/education-database-mock.model";
import { EducationStoreDatabaseMockAction } from "../action/education-store-database-mock.action";

@State<EducationStoreDatabaseMockModel>({
  name: "educationStoreDatabaseMockState",
  defaults: {
    items: [
      EducationDatabaseMockConst.EDUCATION_PERSONAL_0,
      EducationDatabaseMockConst.EDUCATION_PERSONAL_1,
      EducationDatabaseMockConst.EDUCATION_TEST_2
    ]
  }
})
@Injectable({ providedIn: "root" })
export class EducationStoreDatabaseMockState extends BaseStoreDatabaseMockState<EducationDatabaseMockModel> {
  @Selector()
  static getItems(state: EducationStoreDatabaseMockModel): EducationDatabaseMockModel[] {
    return super.baseGetItems(state);
  }

  @Action(EducationStoreDatabaseMockAction.DeleteByIds)
  deleteByIds(context: StateContext<EducationStoreDatabaseMockModel>, action: EducationStoreDatabaseMockAction.DeleteByIds) {
    super.baseDeleteByIds(context, action);  
  }

  @Action(EducationStoreDatabaseMockAction.DeleteByParentIds)
  deleteByParentIds(context: StateContext<EducationStoreDatabaseMockModel>, action: EducationStoreDatabaseMockAction.DeleteByParentIds) {
    super.baseDeleteByParentIds(context, action);  
  }
}
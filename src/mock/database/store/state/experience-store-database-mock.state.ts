import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { ExperienceStoreDatabaseMockModel } from "../model/experience-store-database-mock.model";
import { ExperienceDatabaseMockConst } from "../../const/experience-database-mock.const";
import { BaseStoreDatabaseMockState } from "./base-store-database-mock.state";
import { ExperienceDatabaseMockModel } from "../../model/experience-database-mock.model";
import { ExperienceStoreDatabaseMockAction } from "../action/experience-store-database-mock.action";

@State<ExperienceStoreDatabaseMockModel>({
  name: "experienceStoreDatabaseMockState",
  defaults: {
    items: [
      ExperienceDatabaseMockConst.EXPERIENCE_PERSONAL_0,
      ExperienceDatabaseMockConst.EXPERIENCE_PERSONAL_1,
      ExperienceDatabaseMockConst.EXPERIENCE_TEST_2
    ]
  }
})
@Injectable({ providedIn: "root" })
export class ExperienceStoreDatabaseMockState extends BaseStoreDatabaseMockState<ExperienceDatabaseMockModel> {
  @Selector()
  static getItems(state: ExperienceStoreDatabaseMockModel): ExperienceDatabaseMockModel[] {
    return super.baseGetItems(state);
  }

  @Action(ExperienceStoreDatabaseMockAction.DeleteByIds)
  deleteByIds(context: StateContext<ExperienceStoreDatabaseMockModel>, action: ExperienceStoreDatabaseMockAction.DeleteByIds) {
    super.baseDeleteByIds(context, action);  
  }

  @Action(ExperienceStoreDatabaseMockAction.DeleteByParentIds)
  deleteByParentIds(context: StateContext<ExperienceStoreDatabaseMockModel>, action: ExperienceStoreDatabaseMockAction.DeleteByParentIds) {
    super.baseDeleteByParentIds(context, action);  
  }
}
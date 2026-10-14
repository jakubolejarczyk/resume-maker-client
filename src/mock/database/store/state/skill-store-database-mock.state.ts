import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { SkillStoreDatabaseMockModel } from "../model/skill-store-database-mock.model";
import { SkillDatabaseMockConst } from "../../const/skill-database-mock.const";
import { BaseStoreDatabaseMockState } from "./base-store-database-mock.state";
import { SkillDatabaseMockModel } from "../../model/skill-database-mock.model";
import { SkillStoreDatabaseMockAction } from "../action/skill-store-database-mock.action";

@State<SkillStoreDatabaseMockModel>({
  name: "skillStoreDatabaseMockState",
  defaults: {
    items: [
      SkillDatabaseMockConst.SKILL_PERSONAL_0,
      SkillDatabaseMockConst.SKILL_PERSONAL_1,
      SkillDatabaseMockConst.SKILL_PERSONAL_2,
      SkillDatabaseMockConst.SKILL_PERSONAL_3,
      SkillDatabaseMockConst.SKILL_TEST_4,
      SkillDatabaseMockConst.SKILL_TEST_5
    ]
  }
})
@Injectable({ providedIn: "root" })
export class SkillStoreDatabaseMockState extends BaseStoreDatabaseMockState<SkillDatabaseMockModel> {
  @Selector()
  static getItems(state: SkillStoreDatabaseMockModel): SkillDatabaseMockModel[] {
    return super.baseGetItems(state);
  }

  @Action(SkillStoreDatabaseMockAction.DeleteByIds)
  deleteByIds(context: StateContext<SkillStoreDatabaseMockModel>, action: SkillStoreDatabaseMockAction.DeleteByIds) {
    super.baseDeleteByIds(context, action);  
  }

  @Action(SkillStoreDatabaseMockAction.DeleteByParentIds)
  deleteByParentIds(context: StateContext<SkillStoreDatabaseMockModel>, action: SkillStoreDatabaseMockAction.DeleteByParentIds) {
    super.baseDeleteByParentIds(context, action);  
  }
}
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { SkillStoreDatabaseMockModel } from "../model/skill-store-database-mock.model";
import { SkillStoreDatabaseMockAction } from "../action/skill-store-database-mock.action";
import { SkillDatabaseMockConst } from "../../const/skill-database-mock.const";

@State<SkillStoreDatabaseMockModel>({
  name: "skillStoreDatabaseMockState",
  defaults: [
    SkillDatabaseMockConst.SKILL_PERSONAL_0,
    SkillDatabaseMockConst.SKILL_PERSONAL_1,
    SkillDatabaseMockConst.SKILL_PERSONAL_2,
    SkillDatabaseMockConst.SKILL_PERSONAL_3,
    SkillDatabaseMockConst.SKILL_TEST_4,
    SkillDatabaseMockConst.SKILL_TEST_5
  ]
})
@Injectable({ providedIn: "root" })
export class SkillStoreDatabaseMockState {
  @Selector()
  static getSkills(state: SkillStoreDatabaseMockModel) {
    return state;
  }
  
  @Action(SkillStoreDatabaseMockAction.DeleteByIds)
  deleteByIds(context: StateContext<SkillStoreDatabaseMockModel>, action: SkillStoreDatabaseMockAction.DeleteByIds) {
    const state = context.getState();
    const newState = state.filter(skill => !action.ids.includes(skill.id));
    context.setState(newState);
  }

  @Action(SkillStoreDatabaseMockAction.DeleteByResumeIds)
  deleteByResumeIds(context: StateContext<SkillStoreDatabaseMockModel>, action: SkillStoreDatabaseMockAction.DeleteByResumeIds) {
    const state = context.getState();
    const newState = state.filter(skill => !action.resumeIds.includes(skill.resumeId));
    context.setState(newState);
  }
}
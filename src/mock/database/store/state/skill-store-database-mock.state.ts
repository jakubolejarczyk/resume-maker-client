import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { SkillStoreDatabaseMockModel } from "../model/skill-store-database-mock.model";
import { SkillStoreDatabaseMockAction } from "../action/skill-store-database-mock.action";
import { SKILL_0, SKILL_1, SKILL_2, SKILL_3 } from "../../const/skill-database-mock.const";

@State<SkillStoreDatabaseMockModel>({
  name: "skillStoreDatabaseMockState",
  defaults: [SKILL_0, SKILL_1, SKILL_2, SKILL_3]
})
@Injectable({ providedIn: "root" })
export class SkillStoreDatabaseMockState {
  @Selector()
  static getSkills(state: SkillStoreDatabaseMockModel) {
    return state;
  }
  
  @Action(SkillStoreDatabaseMockAction.Delete)
  delete(context: StateContext<SkillStoreDatabaseMockModel>, action: SkillStoreDatabaseMockAction.Delete) {
    const state = context.getState();
    const newState = state.filter(skill => skill.id !== action.id);
    context.setState(newState);
  }
}
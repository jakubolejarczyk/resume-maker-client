import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { ExperienceStoreDatabaseMockModel } from "../model/experience-store-database-mock.model";
import { ExperienceStoreDatabaseMockAction } from "../action/experience-store-database-mock.action";
import { EXPERIENCE_0, EXPERIENCE_1 } from "../../const/experience-database-mock.const";

@State<ExperienceStoreDatabaseMockModel>({
  name: "experienceStoreDatabaseMockState",
  defaults: [EXPERIENCE_0, EXPERIENCE_1]
})
@Injectable({ providedIn: "root" })
export class ExperienceStoreDatabaseMockState {
  @Selector()
  static getExperiences(state: ExperienceStoreDatabaseMockModel) {
    return state;
  }
  
  @Action(ExperienceStoreDatabaseMockAction.DeleteByIds)
  deleteByIds(context: StateContext<ExperienceStoreDatabaseMockModel>, action: ExperienceStoreDatabaseMockAction.DeleteByIds) {
    const state = context.getState();
    const newState = state.filter(experience => !action.ids.includes(experience.id));
    context.setState(newState);
  }

  @Action(ExperienceStoreDatabaseMockAction.DeleteByResumeIds)
  deleteByResumeIds(context: StateContext<ExperienceStoreDatabaseMockModel>, action: ExperienceStoreDatabaseMockAction.DeleteByResumeIds) {
    const state = context.getState();
    const newState = state.filter(experience => !action.resumeIds.includes(experience.resumeId));
    context.setState(newState);
  }
}
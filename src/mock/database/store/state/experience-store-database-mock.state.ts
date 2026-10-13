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
  
  @Action(ExperienceStoreDatabaseMockAction.Delete)
  delete(context: StateContext<ExperienceStoreDatabaseMockModel>, action: ExperienceStoreDatabaseMockAction.Delete) {
    const state = context.getState();
    const newState = state.filter(experience => experience.id !== action.id);
    context.setState(newState);
  }
}
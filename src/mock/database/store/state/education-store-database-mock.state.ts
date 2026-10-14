import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { EducationStoreDatabaseMockModel } from "../model/education-store-database-mock.model";
import { EducationStoreDatabaseMockAction } from "../action/education-store-database-mock.action";
import { EDUCATION_0, EDUCATION_1 } from "../../const/education-database-mock.const";

@State<EducationStoreDatabaseMockModel>({
  name: "educationStoreDatabaseMockState",
  defaults: [EDUCATION_0, EDUCATION_1]
})
@Injectable({ providedIn: "root" })
export class EducationStoreDatabaseMockState {
  @Selector()
  static getEducations(state: EducationStoreDatabaseMockModel) {
    return state;
  }
  
  @Action(EducationStoreDatabaseMockAction.DeleteByIds)
  deleteByIds(context: StateContext<EducationStoreDatabaseMockModel>, action: EducationStoreDatabaseMockAction.DeleteByIds) {
    const state = context.getState();
    const newState = state.filter(education => !action.ids.includes(education.id));
    context.setState(newState);
  }

  @Action(EducationStoreDatabaseMockAction.DeleteByResumeIds)
  deleteByResumeIds(context: StateContext<EducationStoreDatabaseMockModel>, action: EducationStoreDatabaseMockAction.DeleteByResumeIds) {
    const state = context.getState();
    const newState = state.filter(education => !action.resumeIds.includes(education.resumeId));
    context.setState(newState);
  }
}
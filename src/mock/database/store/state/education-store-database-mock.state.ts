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
  
  @Action(EducationStoreDatabaseMockAction.Delete)
  delete(context: StateContext<EducationStoreDatabaseMockModel>, action: EducationStoreDatabaseMockAction.Delete) {
    const state = context.getState();
    const newState = state.filter(education => education.id !== action.id);
    context.setState(newState);
  }
}
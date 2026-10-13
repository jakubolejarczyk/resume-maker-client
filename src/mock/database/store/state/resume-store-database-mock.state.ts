import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { ResumeStoreDatabaseMockModel } from "../model/resume-store-database-mock.model";
import { ResumeStoreDatabaseMockAction } from "../action/resume-store-database-mock.action";
import { RESUME_0 } from "../../const/resume-database-mock.const";

@State<ResumeStoreDatabaseMockModel>({
  name: "resumeStoreDatabaseMockState",
  defaults: [RESUME_0]
})
@Injectable({ providedIn: "root" })
export class ResumeStoreDatabaseMockState {
  @Selector()
  static getResumes(state: ResumeStoreDatabaseMockModel) {
    return state;
  }
  
  @Action(ResumeStoreDatabaseMockAction.Delete)
  delete(context: StateContext<ResumeStoreDatabaseMockModel>, action: ResumeStoreDatabaseMockAction.Delete) {
    const state = context.getState();
    const newState = state.filter(resume => resume.id !== action.id);
    context.setState(newState);
  }
}
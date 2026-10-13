import { Action, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { ResumeStoreDatabaseMockModel } from "../model/resume-store-database-mock.model";
import { ResumeStoreDatabaseMockAction } from "../action/resume-store-database-mock.action";

@State<ResumeStoreDatabaseMockModel>({
  name: "resumeStoreDatabaseMockState",
  defaults: [
    {
      id: 0,
      order: 0,
      parentId: 0,
      name: "Resume Jakub Olejarczyk ENG"
    }
  ]
})
@Injectable({ providedIn: "root" })
export class ResumeStoreDatabaseMockState {
  @Action(ResumeStoreDatabaseMockAction.Delete)
  delete(context: StateContext<ResumeStoreDatabaseMockModel>, action: ResumeStoreDatabaseMockAction.Delete) {
    const state = context.getState();
    const newState = state.filter(resume => resume.id !== action.id);
    context.setState(newState);
  }
}
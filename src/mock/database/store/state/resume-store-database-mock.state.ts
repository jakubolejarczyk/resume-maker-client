import { Action, createSelector, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { ResumeStoreDatabaseMockModel } from "../model/resume-store-database-mock.model";
import { ResumeStoreDatabaseMockAction } from "../action/resume-store-database-mock.action";
import { ResumeDatabaseMockConst } from "../../const/resume-database-mock.const";

@State<ResumeStoreDatabaseMockModel>({
  name: "resumeStoreDatabaseMockState",
  defaults: [
    ResumeDatabaseMockConst.RESUME_PERSONAL_0,
    ResumeDatabaseMockConst.RESUME_TEST_1
  ]
})
@Injectable({ providedIn: "root" })
export class ResumeStoreDatabaseMockState {
  @Selector()
  static getResumes(state: ResumeStoreDatabaseMockModel) {
    return state;
  }

  static getResumesByUserIds(ids: number[]) {
    return createSelector(
      [ResumeStoreDatabaseMockState.getResumes],
      (state: ResumeStoreDatabaseMockModel) => state.filter(resume => ids.includes(resume.userId))
    );
  }
  
  @Action(ResumeStoreDatabaseMockAction.DeleteByIds)
  deleteByIds(context: StateContext<ResumeStoreDatabaseMockModel>, action: ResumeStoreDatabaseMockAction.DeleteByIds) {
    const state = context.getState();
    const newState = state.filter(resume => !action.ids.includes(resume.id));
    context.setState(newState);
  }

  @Action(ResumeStoreDatabaseMockAction.DeleteByUserIds)
  deleteByUserIds(context: StateContext<ResumeStoreDatabaseMockModel>, action: ResumeStoreDatabaseMockAction.DeleteByUserIds) {
    const state = context.getState();
    const newState = state.filter(resume => !action.userIds.includes(resume.userId));
    context.setState(newState);
  }
}
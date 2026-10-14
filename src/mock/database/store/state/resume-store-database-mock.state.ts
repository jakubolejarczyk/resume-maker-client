import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { ResumeStoreDatabaseMockModel } from "../model/resume-store-database-mock.model";
import { ResumeDatabaseMockConst } from "../../const/resume-database-mock.const";
import { BaseStoreDatabaseMockState } from "./base-store-database-mock.state";
import { ResumeDatabaseMockModel } from "../../model/resume-database-mock.model";
import { ResumeStoreDatabaseMockAction } from "../action/resume-store-database-mock.action";

@State<ResumeStoreDatabaseMockModel>({
  name: "resumeStoreDatabaseMockState",
  defaults: {
    items: [
      ResumeDatabaseMockConst.RESUME_PERSONAL_0,
      ResumeDatabaseMockConst.RESUME_TEST_1
    ]
  }
})
@Injectable({ providedIn: "root" })
export class ResumeStoreDatabaseMockState extends BaseStoreDatabaseMockState<ResumeDatabaseMockModel> {
  @Selector()
  static getItems(state: ResumeStoreDatabaseMockModel): ResumeDatabaseMockModel[] {
    return super.baseGetItems(state);
  }

  @Action(ResumeStoreDatabaseMockAction.DeleteByIds)
  deleteByIds(context: StateContext<ResumeStoreDatabaseMockModel>, action: ResumeStoreDatabaseMockAction.DeleteByIds) {
    super.baseDeleteByIds(context, action);  
  }

  @Action(ResumeStoreDatabaseMockAction.DeleteByParentIds)
  deleteByParentIds(context: StateContext<ResumeStoreDatabaseMockModel>, action: ResumeStoreDatabaseMockAction.DeleteByParentIds) {
    super.baseDeleteByParentIds(context, action);  
  }
}
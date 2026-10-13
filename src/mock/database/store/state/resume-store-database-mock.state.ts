import { State } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { ResumeStoreDatabaseMockModel } from "../model/resume-store-database-mock.model";

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
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ResumeStoreDatabaseMockState {}
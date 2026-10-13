import { Action, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { EducationStoreDatabaseMockModel } from "../model/education-store-database-mock.model";
import { EducationStoreDatabaseMockAction } from "../action/education-store-database-mock.action";

@State<EducationStoreDatabaseMockModel>({
  name: "educationStoreDatabaseMockState",
  defaults: [
    {
        id: 0,
        order: 0,
        parentId: 0,
        institutionName: "Jan Kochanowski University of Kielce",
        fieldOfStudy: "Computer Science",
        degree: "Bachelor of Engineering",
        startYear: 2017,
        endYear: 2021
    },
    {
        id: 1,
        order: 1,
        parentId: 0,
        institutionName: "Kielce University of Technology",
        fieldOfStudy: "Computer Science",
        degree: "Master of Science",
        startYear: 2024,
        endYear: 2026
    }
  ]
})
@Injectable({ providedIn: "root" })
export class ExperienceStoreDatabaseMockState {
  @Action(EducationStoreDatabaseMockAction.Delete)
  delete(context: StateContext<EducationStoreDatabaseMockModel>, action: EducationStoreDatabaseMockAction.Delete) {
    const state = context.getState();
    const newState = state.filter(education => education.id !== action.id);
    context.setState(newState);
  }
}
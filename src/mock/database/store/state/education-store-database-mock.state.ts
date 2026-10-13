import { State } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { EducationStoreDatabaseMockModel } from "../model/education-store-database-mock.model";

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
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ExperienceStoreDatabaseMockState {}
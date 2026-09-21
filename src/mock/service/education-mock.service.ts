import { Injectable } from "@angular/core";

import { BaseMockService } from "./base-mock.service";
import { EducationMockModel } from "../model/education-mock.model";

@Injectable({ providedIn: "root" })
export class EducationMockService extends BaseMockService<EducationMockModel> {
    constructor() {
        super([
            {
                id: 0,
                startYear: 2017,
                endYear: 2021,
                fieldOfStudy: "Computer Science",
                degree: "Bachelor of Engineering",
                institutionName: "Jan Kochanowski University of Kielce"
            },
            {
                id: 1,
                startYear: 2024,
                endYear: 2026,
                fieldOfStudy: "Computer Science",
                degree: "Master of Science",
                institutionName: "Kielce University of Technology"
            }
        ]);
    }
}
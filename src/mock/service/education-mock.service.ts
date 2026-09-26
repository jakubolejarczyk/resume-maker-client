import { Injectable } from "@angular/core";

import { EducationMockModel } from "../model/education-mock.model";
import { BaseMockService } from "./base-mock.service";

@Injectable({ providedIn: "root" })
export class EducationMockService extends BaseMockService<EducationMockModel> {
    constructor() {
        super([
            {
                id: "36dfb15d-c304-4fff-88ea-10a30ce6f8b0",
                startYear: 2017,
                endYear: 2021,
                fieldOfStudy: "Computer Science",
                degree: "Bachelor of Engineering",
                institutionName: "Jan Kochanowski University of Kielce",
                userId: "10229cd3-5321-4692-9996-6d14d01558aa"
            },
            {
                id: "bf296c45-07b7-4396-8f2f-2df39ff5920a",
                startYear: 2024,
                endYear: 2026,
                fieldOfStudy: "Computer Science",
                degree: "Master of Science",
                institutionName: "Kielce University of Technology",
                userId: "10229cd3-5321-4692-9996-6d14d01558aa"
            }
        ]);
    }
}
import { Service } from "@angular/core";

import { EducationDataDatabaseModel } from "../model/data/education-data-database.model";
import { BaseDatabaseData } from "./base-database.data";

@Service()
export class EducationDatabaseData extends BaseDatabaseData<EducationDataDatabaseModel> {
    constructor() {
        super([
            {
                id: 0,
                data: {
                    institutionName: "Jan Kochanowski University of Kielce",
                    fieldOfStudy: "Computer Science",
                    degree: "Bachelor of Engineering",
                    startYear: 2017,
                    endYear: 2021
                },
                metadata: {
                    parentId: 0,
                    order: 0,
                    isSelected: false
                }
            },
            {
                id: 1,
                data: {
                    institutionName: "Kielce University of Technology",
                    fieldOfStudy: "Computer Science",
                    degree: "Master of Science",
                    startYear: 2024,
                    endYear: 2026
                },
                metadata: {
                    parentId: 0,
                    order: 1,
                    isSelected: false
                }
            }
        ]);
    }
}
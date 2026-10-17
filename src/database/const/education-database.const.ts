import { BaseDatabaseModel } from "../model/base/base-database.model";
import { EducationDataDatabaseModel } from "../model/data/education-data-database.model";

export const EDUCATION_0: BaseDatabaseModel<EducationDataDatabaseModel> = {
    data: {
        institutionName: "Jan Kochanowski University of Kielce",
        fieldOfStudy: "Computer Science",
        degree: "Bachelor of Engineering",
        startYear: 2017,
        endYear: 2021
    },
    metadata: {
        id: 0,
        parentId: 0,
        order: 0,
        isSelected: false
    }
}

export const EDUCATION_1: BaseDatabaseModel<EducationDataDatabaseModel> = {
    data: {
        institutionName: "Kielce University of Technology",
        fieldOfStudy: "Computer Science",
        degree: "Master of Science",
        startYear: 2024,
        endYear: 2026
    },
    metadata: {
        id: 1,
        parentId: 0,
        order: 1,
        isSelected: false
    }
}
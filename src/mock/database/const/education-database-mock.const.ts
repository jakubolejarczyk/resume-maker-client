import { EducationDatabaseMockModel } from "../model/education-database-mock.model";

export class EducationDatabaseMockConst {
    static EDUCATION_PERSONAL_0: EducationDatabaseMockModel = {
        id: 0,
        order: 0,
        parentId: 0,
        institutionName: "Jan Kochanowski University of Kielce",
        fieldOfStudy: "Computer Science",
        degree: "Bachelor of Engineering",
        startYear: 2017,
        endYear: 2021
    };

    static EDUCATION_PERSONAL_1: EducationDatabaseMockModel = {
        id: 1,
        order: 1,
        parentId: 0,
        institutionName: "Kielce University of Technology",
        fieldOfStudy: "Computer Science",
        degree: "Master of Science",
        startYear: 2024,
        endYear: 2026
    };

    static EDUCATION_TEST_2: EducationDatabaseMockModel = {
        id: 2,
        order: 0,
        parentId: 1,
        institutionName: "University of Warsaw",
        fieldOfStudy: "Computer Science",
        degree: "Bachelor of Science",
        startYear: 2018,
        endYear: 2022
    };
}
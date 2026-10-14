import { CommonBaseDatabaseMockModel, ResumeIdBaseDatabaseMockModel } from "./base-database-mock.model";

export interface EducationDatabaseMockModel extends CommonBaseDatabaseMockModel, ResumeIdBaseDatabaseMockModel {
    institutionName: string;
    fieldOfStudy: string;
    degree: string;
    startYear: number;
    endYear: number;
}
import { BaseDatabaseMockModel } from "./base-database-mock.model";

export interface EducationDatabaseMockModel extends BaseDatabaseMockModel {
    institutionName: string;
    fieldOfStudy: string;
    degree: string;
    startYear: number;
    endYear: number;
}
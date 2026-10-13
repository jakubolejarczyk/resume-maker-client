import { CommonBaseDatabaseMockModel, ParentIdBaseDatabaseMockModel } from "./base-database-mock.model";

export interface EducationDatabaseMockModel extends CommonBaseDatabaseMockModel, ParentIdBaseDatabaseMockModel {
    institutionName: string;
    fieldOfStudy: string;
    degree: string;
    startYear: number;
    endYear: number;
}
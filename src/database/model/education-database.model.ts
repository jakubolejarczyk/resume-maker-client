import { BaseDatabaseModel } from "./base-database.model";

export interface EducationDatabaseModel extends BaseDatabaseModel {
    institutionName: string;
    fieldOfStudy: string;
    degree: string;
    startYear: number;
    endYear: number;
}
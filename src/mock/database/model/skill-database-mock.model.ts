import { CommonBaseDatabaseMockModel, ResumeIdBaseDatabaseMockModel } from "./base-database-mock.model";

export interface SkillDatabaseMockModel extends CommonBaseDatabaseMockModel, ResumeIdBaseDatabaseMockModel {
    category: string;
    skills: string[];
}
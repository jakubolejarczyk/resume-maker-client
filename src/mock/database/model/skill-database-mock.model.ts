import { BaseDatabaseMockModel } from "./base-database-mock.model";

export interface SkillDatabaseMockModel extends BaseDatabaseMockModel {
    category: string;
    skills: string[];
}
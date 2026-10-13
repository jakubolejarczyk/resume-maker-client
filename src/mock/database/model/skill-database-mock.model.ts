import { CommonBaseDatabaseMockModel, ParentIdBaseDatabaseMockModel } from "./base-database-mock.model";

export interface SkillDatabaseMockModel extends CommonBaseDatabaseMockModel, ParentIdBaseDatabaseMockModel {
    category: string;
    skills: string[];
}
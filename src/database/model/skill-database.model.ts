import { BaseDatabaseModel } from "./base-database.model";

export interface SkillDatabaseModel extends BaseDatabaseModel {
    category: string;
    skills: string[];
}
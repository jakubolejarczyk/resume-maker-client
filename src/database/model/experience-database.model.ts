import { BaseDatabaseModel } from "./base-database.model";

export interface ExperienceDatabaseModel extends BaseDatabaseModel {
    company: string;
    jobTitle: string;
    description: string[];
    startDate: string;
    endDate?: string;
}
import { BaseDatabaseMockModel } from "./base-database-mock.model";

export interface ExperienceDatabaseMockModel extends BaseDatabaseMockModel {
    company: string;
    jobTitle: string;
    description: string[];
    startDate: string;
    endDate?: string;
}
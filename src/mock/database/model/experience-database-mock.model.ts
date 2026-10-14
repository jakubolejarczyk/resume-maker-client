import { CommonBaseDatabaseMockModel, ResumeIdBaseDatabaseMockModel } from "./base-database-mock.model";

export interface ExperienceDatabaseMockModel extends CommonBaseDatabaseMockModel, ResumeIdBaseDatabaseMockModel {
    company: string;
    jobTitle: string;
    description: string[];
    startDate: string;
    endDate?: string;
}
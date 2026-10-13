import { CommonBaseDatabaseMockModel, ParentIdBaseDatabaseMockModel } from "./base-database-mock.model";

export interface ExperienceDatabaseMockModel extends CommonBaseDatabaseMockModel, ParentIdBaseDatabaseMockModel {
    company: string;
    jobTitle: string;
    description: string[];
    startDate: string;
    endDate?: string;
}
import { BaseMockModel } from "./base-mock.model";

export interface ExperienceMockModel extends BaseMockModel {
    company: string;
    startDate: string;
    endDate?: string;
    jobTitle: string;
    description: string[];
    userId: string;
}
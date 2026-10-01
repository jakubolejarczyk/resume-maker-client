import { BaseApiModel } from "./base-api.model";

export interface ExperienceApiModel extends BaseApiModel {
    company: string;
    startDate: string;
    endDate?: string;
    jobTitle: string;
    description: string[];
    userId: number;
}
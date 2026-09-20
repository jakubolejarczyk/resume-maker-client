import { BaseMockModel } from "./base-mock.model";

export interface ExperienceMockModel extends BaseMockModel {
    company: string;
    jobTitle: string;
    description: string[];
}
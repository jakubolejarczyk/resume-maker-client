import { BaseMockModel } from "./base-mock.model";

export interface SkillMockModel extends BaseMockModel {
    category: string;
    skills: string[];
    userId: string;
}
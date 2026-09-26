import { BaseApiModel } from "./base-api.model";

export interface SkillApiModel extends BaseApiModel {
    category: string;
    skills: string[];
    userId: string;
}
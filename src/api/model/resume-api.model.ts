import { BaseApiModel } from "./base-api.model";

export interface ResumeApiModel extends BaseApiModel {
    name: string;
    userId: number;
}
import { BaseApiModel } from "./base-api.model";

export interface EducationApiModel extends BaseApiModel {
    startYear: number;
    endYear: number;
    fieldOfStudy: string;
    degree: string;
    institutionName: string;
    resumeId: number;
}
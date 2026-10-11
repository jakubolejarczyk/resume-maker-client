import { BaseApiModel } from "./base-api.model";

export interface EducationApiModel extends BaseApiModel {
    institutionName: string;
    fieldOfStudy: string;
    degree: string;
    startYear: number;
    endYear: number;
    resumeId: number;
}
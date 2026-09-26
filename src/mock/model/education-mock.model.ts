import { BaseMockModel } from "./base-mock.model";

export interface EducationMockModel extends BaseMockModel {
    startYear: number;
    endYear: number;
    fieldOfStudy: string;
    degree: string;
    institutionName: string;
    userId: string;
}
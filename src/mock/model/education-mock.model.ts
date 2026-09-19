import { BaseMockModel } from "./base-mock.model";

export interface EducationMockModel extends BaseMockModel {
    institutionName: string;
    fieldOfStudy: string;
    degree: string;
    graduationYear: number;
}
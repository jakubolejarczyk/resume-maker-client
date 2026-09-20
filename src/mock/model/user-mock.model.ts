import { BaseMockModel } from "./base-mock.model";

export interface UserMockModel extends BaseMockModel {
    firstName: string;
    lastName: string;
    jobTitle: string;
    email: string;
    countryCode: string;
    phoneNumber: string;
    city: string;
    country: string;
    links: string[];
    summary: string;
}
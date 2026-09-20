import { BaseMockModel } from "./base-mock.model";

export interface UserMockModel extends BaseMockModel {
    firstName: string;
    lastName: string;
    jobTitle: string;
    phone: string;
    email: string;
    city: string;
    country: string;
    links: string[];
    languages: string[];
}
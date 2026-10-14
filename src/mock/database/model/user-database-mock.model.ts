import { BaseDatabaseMockModel } from "./base-database-mock.model";

export interface UserDatabaseMockModel extends BaseDatabaseMockModel {
    firstName: string;
    lastName: string;
    jobTitle: string;
    phoneNumber: string;
    email: string;
    city: string;
    country: string;
    links: string[];
    summary: string;
}
import { CommonBaseDatabaseMockModel } from "./base-database-mock.model";

export interface UserDatabaseMockModel extends CommonBaseDatabaseMockModel {
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
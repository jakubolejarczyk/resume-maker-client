import { BaseDatabaseModel } from "./base-database.model";

export interface UserDatabaseModel extends BaseDatabaseModel {
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
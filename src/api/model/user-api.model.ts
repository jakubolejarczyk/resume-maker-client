import { BaseApiModel } from "./base-api.model";

export interface UserApiModel extends BaseApiModel {
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
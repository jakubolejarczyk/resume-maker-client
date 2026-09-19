interface UserApiModel {
    id: string;
    firstName: string;
    lastName: string;
    jobTitle: string;
    email: string;
    phoneNumber: string;
    city: string;
    country: string;
}

export interface UsersApiModel {
    users: UserApiModel[];
}
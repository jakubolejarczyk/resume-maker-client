import { UsersDtoModel } from "../model/users-dto.model";

export const USERS_DTO_MOCK: UsersDtoModel = {
    users: [
        {
            data: {
                firstName: "Jakub",
                lastName: "Olejarczyk",
                role: "Senior Software Engineer",
                phoneNumber: "+48 501 007 197",
                email: "jakub.olejarczyk@outlook.com",
                city: "Kielce",
                country: "Poland"
            },
            metadata: {
                id: "fd4f7b64-340d-4015-b202-805bfa77aff9",
                crudAction: "read"
            }
        }
    ]
};
import { UsersDto } from "../model/users-dto.model";

export const USERS_DTO_MOCK: UsersDto.Model = {
    users: [
        {
            data: {
                firstName: "Jakub",
                lastName: "Olejarczyk",
            },
            metadata: {
                id: "5e0a2c57-d7c3-4f0e-a91d-0930eb12efbb",
                crudAction: "read"
            }
        }
    ]
};
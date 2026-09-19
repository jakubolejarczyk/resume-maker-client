import { CrudActionType } from "../../../type/crud-action.type";

interface UserDtoDataModel {
    firstName: string;
    lastName: string;
    role: string;
    phoneNumber: string;
    email: string;
    city: string;
    country: string;
}

interface UserDtoMetadataModel {
    id: string;
    crudAction: CrudActionType;
}

interface UserDtoModel {
    data: UserDtoDataModel;
    metadata: UserDtoMetadataModel;
}

export interface UsersDtoModel {
    users: UserDtoModel[];
}
import { CrudStatusType } from "../../../type/crud-status.type";

export namespace UsersDto {
    interface UserModel {
        id: string;
        firstName: string;
        lastName: string;
        crudStatus: CrudStatusType;
    }

    export interface Model {
        users: UserModel[];
    }
}
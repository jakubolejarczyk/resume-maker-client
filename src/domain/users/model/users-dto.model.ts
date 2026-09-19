import { CrudActionType } from "../../../type/crud-action.type";

export namespace UsersDto {
    interface DataModel {
        firstName: string;
        lastName: string;
    }

    interface MetadataModel {
        id: string;
        crudAction: CrudActionType;
    }

    interface UserModel {
        data: DataModel;
        metadata: MetadataModel;
    }

    export interface Model {
        users: UserModel[];
    }
}
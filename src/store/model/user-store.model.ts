import { UserModel } from "../../model/user.model";

export interface UserStoreModel {
    selectedUserId: number | null;
    users: UserModel[];
}
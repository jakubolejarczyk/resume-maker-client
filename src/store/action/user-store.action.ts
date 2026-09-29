import { UserApiModel } from "../../api/model/user-api.model";
import { ReadAllBaseStoreAction } from "./base-store.action";

export class ReadAllUserStoreAction extends ReadAllBaseStoreAction<UserApiModel> {
    static readonly type = "[UserStoreState] Read All";
}
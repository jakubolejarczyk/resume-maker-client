import { TestUserApiModel } from "../../api/service/base-api.service.specold";
import { ReadAllBaseStoreAction } from "./base-store.action";

export class ReadAllTestUserStoreAction extends ReadAllBaseStoreAction<TestUserApiModel> {
    static readonly type = "[TestUserStoreState] Read All";
}
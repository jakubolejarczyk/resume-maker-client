import { TestUserApiModel } from "../../api/service/base-api.service.spec";

export class ReadAllTestUserStoreAction {
    static readonly type = "[TestUserStoreState] Read All";

    constructor(public testUsers: TestUserApiModel[]) {}
}
import { Injectable } from "@angular/core";

import { BaseService } from "./base.service";
import { TestUserApiModel, TestUserApiService } from "../api/service/base-api.service.specold";
import { ReadAllTestUserStoreAction } from "../store/action/test-user-store.action";

@Injectable({ providedIn: "root" })
export class TestUserService extends BaseService<TestUserApiModel> {
    constructor() {
        super(TestUserApiService, ReadAllTestUserStoreAction);
    }
}
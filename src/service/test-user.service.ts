import { Injectable } from "@angular/core";
import { switchMap } from "rxjs";

import { BaseService } from "./base.service";
import { TestUserApiModel, TestUserApiService } from "../api/service/base-api.service.spec";
import { ReadAllTestUserStoreAction } from "../store/action/test-user-store.action";

@Injectable({ providedIn: "root" })
export class TestUserService extends BaseService<TestUserApiModel> {
    constructor() {
        super(TestUserApiService);
    }

    override readAll() {
        return this.baseApiService.readAll().pipe(
            switchMap(testUsers => this.store.dispatch(new ReadAllTestUserStoreAction(testUsers)))
        );
    }
}
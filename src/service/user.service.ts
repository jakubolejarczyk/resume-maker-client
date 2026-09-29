import { Injectable } from "@angular/core";

import { BaseService } from "./base.service";
import { UserApiService } from "../api/service/user-api.service";
import { UserApiModel } from "../api/model/user-api.model";
import { ReadAllUserStoreAction } from "../store/action/user-store.action";

@Injectable({ providedIn: "root" })
export class UserService extends BaseService<UserApiModel> {
    constructor() {
        super(UserApiService, ReadAllUserStoreAction);
    }
}
import { Injectable } from "@angular/core";

import { BaseService } from "./base.service";
import { UserApiService } from "../api/service/user-api.service";
import { UserApiModel } from "../api/model/user-api.model";

@Injectable({ providedIn: "root" })
export class UserService extends BaseService<UserApiModel> {
    constructor() {
        super(UserApiService);
    }
}
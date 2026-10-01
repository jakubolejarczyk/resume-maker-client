import { Injectable } from "@angular/core";

import { BaseApiService } from "./base-api.service";
import { UserApiModel } from "../model/user-api.model";
import { UserMockService } from "../../mock/service/user-mock.service";

@Injectable({ providedIn: "root" })
export class UserApiService extends BaseApiService<UserApiModel> {
    constructor() {
        super(UserMockService);
    }
}
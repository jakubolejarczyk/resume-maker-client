import { Injectable } from "@angular/core";

import { BaseApiService } from "./base-api.service";
import { UserMockService } from "../../mock/service/user-mock.service";
import { UserApiModel } from "../model/user-api.model";

@Injectable({ providedIn: "root" })
export class UserApiService extends BaseApiService<UserApiModel> {
    constructor() {
        super(UserMockService);
    }
}
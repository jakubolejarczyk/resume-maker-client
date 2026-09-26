import { Injectable } from "@angular/core";

import { BaseApiService } from "./base-api.service";
import { UserMockService } from "../../mock/service/user-mock.service";

@Injectable({ providedIn: "root" })
export class UserApiService extends BaseApiService {
    constructor() {
        super(UserMockService);
    }
}
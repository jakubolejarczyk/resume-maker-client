import { Service } from "@angular/core";

import { BaseApiService } from "./base-api.service";
import { UserDataApiModel } from "../model/data/user-data-api.model";
import { UserLogicService } from "../../logic/service/user-logic.service";

@Service()
export class UserApiService extends BaseApiService<UserDataApiModel> {
    constructor() {
        super(UserLogicService);
    }
}
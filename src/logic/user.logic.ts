import { Injectable } from "@angular/core";

import { BaseLogic } from "./base.logic";
import { UserDatabaseModel } from "../database/model/user-database.model";
import { UserDatabaseService } from "../database/service/user-database.service";

@Injectable({ providedIn: "root" })
export class UserLogic extends BaseLogic<UserDatabaseModel> {
    constructor() {
        super(UserDatabaseService);
    }
}
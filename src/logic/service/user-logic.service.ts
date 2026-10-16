import { Injectable } from "@angular/core";

import { BaseLogicService } from "./base-logic.service";
import { UserDatabaseModel } from "../../database/model/data/user-data-database.model";
import { UserDatabaseService } from "../../database/service/user-database.service";

@Injectable({ providedIn: "root" })
export class UserLogicService extends BaseLogicService<UserDatabaseModel> {
    constructor() {
        super(UserDatabaseService);
    }
}
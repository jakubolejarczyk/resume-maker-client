import { Service } from "@angular/core";

import { BaseLogicService } from "./base-logic.service";
import { UserDataDatabaseModel } from "../../database/model/data/user-data-database.model";
import { UserDatabaseService } from "../../database/service/user-database.service";

@Service()
export class UserLogicService extends BaseLogicService<UserDataDatabaseModel> {
    constructor() {
        super(UserDatabaseService);
    }
}
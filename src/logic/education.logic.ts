import { Injectable } from "@angular/core";

import { BaseLogic } from "./base.logic";
import { EducationDatabaseModel } from "../database/model/education-database.model";
import { EducationDatabaseService } from "../database/service/education-database.service";

@Injectable({ providedIn: "root" })
export class EducationLogic extends BaseLogic<EducationDatabaseModel> {
    constructor() {
        super(EducationDatabaseService);
    }
}
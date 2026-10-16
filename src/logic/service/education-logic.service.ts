import { Injectable } from "@angular/core";

import { BaseLogicService } from "./base-logic.service";
import { EducationDatabaseModel } from "../../database/model/data/education-data-database.model";
import { EducationDatabaseService } from "../../database/service/education-database.service";

@Injectable({ providedIn: "root" })
export class EducationLogicService extends BaseLogicService<EducationDatabaseModel> {
    constructor() {
        super(EducationDatabaseService);
    }
}
import { Service } from "@angular/core";

import { BaseLogicService } from "./base-logic.service";
import { EducationDataDatabaseModel } from "../../database/model/data/education-data-database.model";
import { EducationDatabaseService } from "../../database/service/education-database.service";

@Service()
export class EducationLogicService extends BaseLogicService<EducationDataDatabaseModel> {
    constructor() {
        super(EducationDatabaseService);
    }
}
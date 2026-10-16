import { Injectable } from "@angular/core";

import { BaseLogicService } from "./base-logic.service";
import { ExperienceDatabaseModel } from "../../database/model/data/experience-data-database.model";
import { ExperienceDatabaseService } from "../../database/service/experience-database.service";

@Injectable({ providedIn: "root" })
export class ExperienceLogicService extends BaseLogicService<ExperienceDatabaseModel> {
    constructor() {
        super(ExperienceDatabaseService);
    }
}
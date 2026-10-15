import { Injectable } from "@angular/core";

import { BaseLogic } from "./base.logic";
import { ExperienceDatabaseModel } from "../database/model/experience-database.model";
import { ExperienceDatabaseService } from "../database/service/experience-database.service";

@Injectable({ providedIn: "root" })
export class ExperienceLogic extends BaseLogic<ExperienceDatabaseModel> {
    constructor() {
        super(ExperienceDatabaseService);
    }
}
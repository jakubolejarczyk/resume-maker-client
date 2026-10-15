import { Injectable } from "@angular/core";

import { BaseLogic } from "./base.logic";
import { SkillDatabaseModel } from "../database/model/skill-database.model";
import { SkillDatabaseService } from "../database/service/skill-database.service";

@Injectable({ providedIn: "root" })
export class SkillLogic extends BaseLogic<SkillDatabaseModel> {
    constructor() {
        super(SkillDatabaseService);
    }
}
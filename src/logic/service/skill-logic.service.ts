import { Injectable } from "@angular/core";

import { BaseLogicService } from "./base-logic.service";
import { SkillDatabaseModel } from "../../database/model/skill-database.model";
import { SkillDatabaseService } from "../../database/service/skill-database.service";

@Injectable({ providedIn: "root" })
export class SkillLogicService extends BaseLogicService<SkillDatabaseModel> {
    constructor() {
        super(SkillDatabaseService);
    }
}
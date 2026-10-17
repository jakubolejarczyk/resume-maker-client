import { Service } from "@angular/core";

import { BaseLogicService } from "./base-logic.service";
import { SkillDataDatabaseModel } from "../../database/model/data/skill-data-database.model";
import { SkillDatabaseService } from "../../database/service/skill-database.service";

@Service()
export class SkillLogicService extends BaseLogicService<SkillDataDatabaseModel> {
    constructor() {
        super(SkillDatabaseService);
    }
}
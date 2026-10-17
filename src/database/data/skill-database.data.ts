import { Service } from "@angular/core";

import { SkillDataDatabaseModel } from "../model/data/skill-data-database.model";
import { BaseDatabaseData } from "./base-database.data";
import { SKILL_0, SKILL_1, SKILL_2, SKILL_3 } from "../const/skill-database.const";

@Service()
export class SkillDatabaseData extends BaseDatabaseData<SkillDataDatabaseModel> {
    constructor() {
        super([SKILL_0, SKILL_1, SKILL_2, SKILL_3]);
    }
}
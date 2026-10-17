import { Service } from "@angular/core";

import { ExperienceDataDatabaseModel } from "../model/data/experience-data-database.model";
import { BaseDatabaseData } from "./base-database.data";
import { EXPERIENCE_0, EXPERIENCE_1 } from "../const/experience-database.const";

@Service()
export class ExperienceDatabaseData extends BaseDatabaseData<ExperienceDataDatabaseModel> {
    constructor() {
        super([EXPERIENCE_0, EXPERIENCE_1]);
    }
}
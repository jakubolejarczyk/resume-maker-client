import { Service } from "@angular/core";

import { BaseDatabaseService } from "./base-database.service";
import { ExperienceDataDatabaseModel } from "../model/data/experience-data-database.model";
import { ExperienceDatabaseData } from "../data/experience-database.data";

@Service()
export class ExperienceDatabaseService extends BaseDatabaseService<ExperienceDataDatabaseModel> {
  constructor() {
    super(ExperienceDatabaseData);
  }
}
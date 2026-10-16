import { Service } from "@angular/core";

import { BaseDatabaseService } from "./base-database.service";
import { EducationDataDatabaseModel } from "../model/data/education-data-database.model";
import { EducationDatabaseData } from "../data/education-database.data";

@Service()
export class EducationDatabaseService extends BaseDatabaseService<EducationDataDatabaseModel> {
  constructor() {
    super(EducationDatabaseData);
  }
}
import { Service } from "@angular/core";

import { BaseDatabaseService } from "./base-database.service";
import { ResumeDataDatabaseModel } from "../model/data/resume-data-database.model";
import { ResumeDatabaseData } from "../data/resume-database.data";

@Service()
export class ResumeDatabaseService extends BaseDatabaseService<ResumeDataDatabaseModel> {
  constructor() {
    super(ResumeDatabaseData);
  }
}
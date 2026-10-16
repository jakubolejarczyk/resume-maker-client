import { Injectable } from "@angular/core";

import { BaseLogicService } from "./base-logic.service";
import { ResumeDatabaseModel } from "../../database/model/data/resume-data-database.model";
import { ResumeDatabaseService } from "../../database/service/resume-database.service";

@Injectable({ providedIn: "root" })
export class ResumeLogicService extends BaseLogicService<ResumeDatabaseModel> {
    constructor() {
        super(ResumeDatabaseService);
    }
}
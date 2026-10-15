import { Injectable } from "@angular/core";

import { BaseLogic } from "./base.logic";
import { ResumeDatabaseModel } from "../database/model/resume-database.model";
import { ResumeDatabaseService } from "../database/service/resume-database.service";

@Injectable({ providedIn: "root" })
export class ResumeLogic extends BaseLogic<ResumeDatabaseModel> {
    constructor() {
        super(ResumeDatabaseService);
    }
}
import { Injectable } from "@angular/core";

import { BaseService } from "./base.service";
import { ExperienceApiService } from "../api/service/experience-api.service";
import { ExperienceApiModel } from "../api/model/experience-api.model";

@Injectable({ providedIn: "root" })
export class ExperienceService extends BaseService<ExperienceApiModel> {
    constructor() {
        super(ExperienceApiService);
    }
}
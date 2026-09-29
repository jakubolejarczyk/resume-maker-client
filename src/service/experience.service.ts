import { Injectable } from "@angular/core";

import { BaseService } from "./base.service";
import { ExperienceApiService } from "../api/service/experience-api.service";
import { ExperienceApiModel } from "../api/model/experience-api.model";
import { ReadAllExperienceStoreAction } from "../store/action/experience-store.action";

@Injectable({ providedIn: "root" })
export class ExperienceService extends BaseService<ExperienceApiModel> {
    constructor() {
        super(ExperienceApiService, ReadAllExperienceStoreAction);
    }
}
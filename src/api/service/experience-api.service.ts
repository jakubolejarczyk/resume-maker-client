import { Injectable } from "@angular/core";

import { ExperienceMockService } from "../../mock/service/experience-mock.service";
import { BaseApiService } from "./base-api.service";
import { ExperienceApiModel } from "../model/experience-api.model";

@Injectable({ providedIn: "root" })
export class ExperienceApiService extends BaseApiService<ExperienceApiModel> {
    constructor() {
        super(ExperienceMockService);
    }
}
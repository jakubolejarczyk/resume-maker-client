import { Injectable } from "@angular/core";

import { BaseApiService } from "./base-api.service";
import { ExperienceApiModel } from "../model/experience-api.model";
import { ExperienceMockService } from "../../mock/service/experience-mock.service";

@Injectable({ providedIn: "root" })
export class ExperienceApiService extends BaseApiService<ExperienceApiModel> {
    constructor() {
        super(ExperienceMockService);
    }
}
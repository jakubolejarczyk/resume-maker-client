import { Injectable } from "@angular/core";

import { BaseService } from "./base.service";
import { ExperienceApiService } from "../api/service/experience-api.service";

@Injectable({ providedIn: "root" })
export class ExperienceService extends BaseService {
    constructor() {
        super(ExperienceApiService);
    }
}
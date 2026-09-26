import { Injectable } from "@angular/core";

import { ExperienceMockService } from "../../mock/service/experience-mock.service";
import { BaseApiService } from "./base-api.service";

@Injectable({ providedIn: "root" })
export class ExperienceApiService extends BaseApiService {
    constructor() {
        super(ExperienceMockService);
    }
}
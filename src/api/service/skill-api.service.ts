import { Injectable } from "@angular/core";

import { SkillMockService } from "../../mock/service/skill-mock.service";
import { BaseApiService } from "./base-api.service";

@Injectable({ providedIn: "root" })
export class SkillApiService extends BaseApiService {
    constructor() {
        super(SkillMockService);
    }
}
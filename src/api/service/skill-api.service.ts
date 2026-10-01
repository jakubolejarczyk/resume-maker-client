import { Injectable } from "@angular/core";

import { BaseApiService } from "./base-api.service";
import { SkillApiModel } from "../model/skill-api.model";
import { SkillMockService } from "../../mock/service/skill-mock.service";

@Injectable({ providedIn: "root" })
export class SkillApiService extends BaseApiService<SkillApiModel> {
    constructor() {
        super(SkillMockService);
    }
}
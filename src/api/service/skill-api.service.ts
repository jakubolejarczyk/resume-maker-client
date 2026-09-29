import { Injectable } from "@angular/core";

import { SkillMockService } from "../../mock/service/skill-mock.service";
import { BaseApiService } from "./base-api.service";
import { SkillApiModel } from "../model/skill-api.model";

@Injectable({ providedIn: "root" })
export class SkillApiService extends BaseApiService<SkillApiModel> {
    constructor() {
        super(SkillMockService);
    }
}
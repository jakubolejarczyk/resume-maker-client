import { Injectable } from "@angular/core";

import { BaseService } from "./base.service";
import { SkillApiService } from "../api/service/skill-api.service";
import { SkillApiModel } from "../api/model/skill-api.model";

@Injectable({ providedIn: "root" })
export class SkillService extends BaseService<SkillApiModel> {
    constructor() {
        super(SkillApiService);
    }
}
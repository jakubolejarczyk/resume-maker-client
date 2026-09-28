import { Injectable } from "@angular/core";

import { BaseService } from "./base.service";
import { SkillApiService } from "../api/service/skill-api.service";

@Injectable({ providedIn: "root" })
export class SkillService extends BaseService {
    constructor() {
        super(SkillApiService);
    }
}
import { Service } from "@angular/core";

import { BaseApiService } from "./base-api.service";
import { SkillDataApiModel } from "../model/data/skill-data-api.model";
import { SkillLogicService } from "../../logic/service/skill-logic.service";

@Service()
export class SkillApiService extends BaseApiService<SkillDataApiModel> {
    constructor() {
        super(SkillLogicService);
    }
}
import { Injectable } from "@angular/core";

import { BaseMockService } from "./base-mock.service";
import { SkillMockModel } from "../model/skill-mock.model";

@Injectable({ providedIn: "root" })
export class SkillMockService extends BaseMockService<SkillMockModel> {
    constructor() {
        super([
            {
                id: 0,
                category: "Frontend",
                skills: []
            },
            {
                id: 1,
                category: "Backend",
                skills: []
            }
        ]);
    }
}
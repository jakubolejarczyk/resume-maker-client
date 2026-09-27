import { Injectable } from "@angular/core";

import { SkillMockModel } from "../model/skill-mock.model";
import { BaseMockService } from "./base-mock.service";

@Injectable({ providedIn: "root" })
export class SkillMockService extends BaseMockService<SkillMockModel> {
    constructor() {
        super([
            {
                id: "abcd0574-a85e-4e7f-9d14-d4fc4067a027",
                category: "Frontend",
                skills: [
                    "Angular",
                    "RxJS",
                    "NgRx"
                ],
                userId: "10229cd3-5321-4692-9996-6d14d01558aa"
            },
            {
                id: "cf9cd6f5-e97e-4cea-bdbd-78f13c20cbc1",
                category: "Developer Tools",
                skills: [
                    "Vitest",
                    "ESLint",
                    "typescript-eslint"
                ],
                userId: "10229cd3-5321-4692-9996-6d14d01558aa"
            },
            {
                id: "dd15a80e-7ea6-43da-a027-da762387ea2f",
                category: "Languages",
                skills: [
                    "English",
                    "Polish"
                ],
                userId: "10229cd3-5321-4692-9996-6d14d01558aa"
            }
        ]);
    }
}
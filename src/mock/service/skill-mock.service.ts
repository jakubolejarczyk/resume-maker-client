import { Injectable } from "@angular/core";

import { SkillMockModel } from "../model/domain/skill-domain-mock.model";
import { BaseMockService } from "./base-mock.service";

@Injectable({ providedIn: "root" })
export class SkillMockService extends BaseMockService<SkillMockModel> {
    constructor() {
        super([
            {
                id: 0,
                category: "Programming Language",
                skills: [
                    "JavaScript",
                    "TypeScript",
                    "C#"
                ],
                order: 0,
                resumeId: 0
            },
            {
                id: 1,
                category: "Frontend",
                skills: [
                    "HTML",
                    "CSS",
                    "SASS",
                    "Angular",
                    "RxJS",
                    "NGXS",
                    "PrimeNG",
                    "Storybook"
                ],
                order: 1,
                resumeId: 0
            },
            {
                id: 2,
                category: "Developer Tools",
                skills: [
                    "Git",
                    "Node.js",
                    "npm",
                    "Vitest",
                    "ESLint",
                    "typescript-eslint",
                    "Visual Studio",
                    "Microsoft Visual Studio Code"
                ],
                order: 2,
                resumeId: 0
            },
            {
                id: 3,
                category: "Languages",
                skills: [
                    "English",
                    "Polish"
                ],
                order: 3,
                resumeId: 0
            }
        ]);
    }
}
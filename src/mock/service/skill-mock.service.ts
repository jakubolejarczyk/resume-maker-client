import { Injectable } from "@angular/core";

import { SkillMockModel } from "../model/skill-mock.model";
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
                userId: 0
            },
            {
                id: 1,
                category: "Frontend",
                skills: [
                    "Angular",
                    "RxJS",
                    "NGXS",
                    "PrimeNG"
                ],
                userId: 0
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
                userId: 0
            },
            {
                id: 3,
                category: "Languages",
                skills: [
                    "English",
                    "Polish"
                ],
                userId: 0
            }
        ]);
    }
}
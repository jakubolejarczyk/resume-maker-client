import { Injectable } from "@angular/core";

import { BaseMockService } from "./base-mock.service";
import { SkillMockModel } from "../model/skill-mock.model";

@Injectable({ providedIn: "root" })
export class SkillMockService extends BaseMockService<SkillMockModel> {
    constructor() {
        super([
            {
                id: 0,
                category: "Programming Languages",
                skills: [
                    "C#",
                    "JavaScript",
                    "TypeScript"
                ]
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
                    "NGRX",
                    "Storybook",
                    "PrimeNG",
                    "Jest"
                ]
            },
            {
                id: 2,
                category: "Backend",
                skills: [
                    "ASP.NET",
                    "Entity Framework",
                    "SQL"
                ]
            },
            {
                id: 3,
                category: "RPA",
                skills: [
                    "UiPath"
                ]
            },
            {
                id: 4,
                category: "Tools",
                skills: [
                    "Docker",
                    "Git",
                    "GitHub",
                    "GitLab",
                    "npm",
                    "pnpm",
                    "ESLint",
                    "Prettier",
                    "Stylelint",
                    "Postman",
                    "Nx",
                    "Windows",
                    "Linux",
                    "Visual Paradigm",
                    "Webstorm",
                    "Visual Studio",
                    "Visual Studio Code"
                ]
            },
            {
                id: 3,
                category: "Languages",
                skills: [
                    "English",
                    "Polish"
                ]
            }
        ]);
    }
}
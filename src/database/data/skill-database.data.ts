import { Service } from "@angular/core";

import { SkillDataDatabaseModel } from "../model/data/skill-data-database.model";
import { BaseDatabaseData } from "./base-database.data";

@Service()
export class SkillDatabaseData extends BaseDatabaseData<SkillDataDatabaseModel> {
    constructor() {
        super([
            {
                id: 0,
                data: {
                    category: "Programming Language",
                    skills: [
                        "C#",
                        "JavaScript",
                        "TypeScript"
                    ]
                },
                metadata: {
                    parentId: 0,
                    order: 0,
                    isSelected: false
                }
            },
            {
                id: 1,
                data: {
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
                    ]
                },
                metadata: {
                    parentId: 0,
                    order: 1,
                    isSelected: false
                }
            },
            {
                id: 2,
                data: {
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
                    ]
                },
                metadata: {
                    parentId: 0,
                    order: 2,
                    isSelected: false
                }
            },
            {
                id: 3,
                data: {
                    category: "Languages",
                    skills: [
                        "English",
                        "Polish"
                    ]
                },
                metadata: {
                    parentId: 0,
                    order: 3,
                    isSelected: false
                }
            }
        ]);
    }
}
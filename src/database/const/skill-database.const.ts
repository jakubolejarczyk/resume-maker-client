import { BaseDatabaseModel } from "../model/base/base-database.model";
import { SkillDataDatabaseModel } from "../model/data/skill-data-database.model";

export const SKILL_0: BaseDatabaseModel<SkillDataDatabaseModel> = {
    data: {
        category: "Programming Language",
        skills: [
            "C#",
            "JavaScript",
            "TypeScript"
        ]
    },
    metadata: {
        id: 0,
        parentId: 0,
        order: 0,
        isSelected: false
    }
};

export const SKILL_1: BaseDatabaseModel<SkillDataDatabaseModel> = {
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
        id: 1,
        parentId: 0,
        order: 1,
        isSelected: false
    }
};

export const SKILL_2: BaseDatabaseModel<SkillDataDatabaseModel> = {
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
        id: 2,
        parentId: 0,
        order: 2,
        isSelected: false
    }
};

export const SKILL_3: BaseDatabaseModel<SkillDataDatabaseModel> = {
    data: {
        category: "Languages",
        skills: [
            "English",
            "Polish"
        ]
    },
    metadata: {
        id: 3,
        parentId: 0,
        order: 3,
        isSelected: false
    }
};
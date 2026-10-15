import { SkillDatabaseModel } from "../model/skill-database.model";

export class SkillDatabaseConst {
    static SKILL_PERSONAL_0: SkillDatabaseModel = {
        id: 0,
        order: 0,
        isSelected: false,
        hasParent: true,
        parentId: 0,
        category: "Programming Language",
        skills: ["JavaScript", "TypeScript", "C#"]
    };

    static SKILL_PERSONAL_1: SkillDatabaseModel = {
        id: 1,
        order: 1,
        isSelected: false,
        hasParent: true,
        parentId: 0,
        category: "Frontend",
        skills: ["HTML", "CSS", "SASS", "Angular", "RxJS", "NGXS", "PrimeNG", "Storybook"]
    };

    static SKILL_PERSONAL_2: SkillDatabaseModel = {
        id: 2,
        order: 2,
        isSelected: false,
        hasParent: true,
        parentId: 0,
        category: "Developer Tools",
        skills: ["Git", "Node.js", "npm", "Vitest", "ESLint", "typescript-eslint", "Visual Studio", "Microsoft Visual Studio Code"]
    };

    static SKILL_PERSONAL_3: SkillDatabaseModel = {
        id: 3,
        order: 3,
        isSelected: false,
        hasParent: true,
        parentId: 0,
        category: "Languages",
        skills: ["English", "Polish"]
    };

    static SKILL_TEST_4: SkillDatabaseModel = {
        id: 4,
        order: 0,
        isSelected: false,
        hasParent: true,
        parentId: 1,
        category: "Frontend Framework",
        skills: ["React", "Angular", "Vue.js"]
    };

    static SKILL_TEST_5: SkillDatabaseModel = {
        id: 5,
        order: 1,
        isSelected: false,
        hasParent: true,
        parentId: 1,
        category: "Backend Technology",
        skills: ["Node.js", "ASP.NET Core", "Express.js"]
    };
}
import { SkillDatabaseMockModel } from "../model/skill-database-mock.model";

export class SkillDatabaseMockConst {
    // My personal data.
    static SKILL_PERSONAL_0: SkillDatabaseMockModel = {
        id: 0,
        order: 0,
        resumeId: 0,
        category: "Programming Language",
        skills: ["JavaScript", "TypeScript", "C#"]
    };

    static SKILL_PERSONAL_1: SkillDatabaseMockModel = {
        id: 1,
        order: 1,
        resumeId: 0,
        category: "Frontend",
        skills: ["HTML", "CSS", "SASS", "Angular", "RxJS", "NGXS", "PrimeNG", "Storybook"]
    };

    static SKILL_PERSONAL_2: SkillDatabaseMockModel = {
        id: 2,
        order: 2,
        resumeId: 0,
        category: "Developer Tools",
        skills: ["Git", "Node.js", "npm", "Vitest", "ESLint", "typescript-eslint", "Visual Studio", "Microsoft Visual Studio Code"]
    };

    static SKILL_PERSONAL_3: SkillDatabaseMockModel = {
        id: 3,
        order: 3,
        resumeId: 0,
        category: "Languages",
        skills: ["English", "Polish"]
    };

    // Test data.
    static SKILL_TEST_4: SkillDatabaseMockModel = {
        id: 4,
        order: 0,
        resumeId: 1,
        category: "Frontend Framework",
        skills: ["React", "Angular", "Vue.js"]
    };

    static SKILL_TEST_5: SkillDatabaseMockModel = {
        id: 5,
        order: 1,
        resumeId: 1,
        category: "Backend Technology",
        skills: ["Node.js", "ASP.NET Core", "Express.js"]
    };
}
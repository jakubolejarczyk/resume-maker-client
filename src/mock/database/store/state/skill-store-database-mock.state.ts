import { State } from "@ngxs/store";
import { Injectable } from "@angular/core";

import { SkillStoreDatabaseMockModel } from "../model/skill-store-database-mock.model";

@State<SkillStoreDatabaseMockModel>({
  name: "skillStoreDatabaseMockState",
  defaults: [
    {
      id: 0,
      order: 0,
      parentId: 0,
      category: "Programming Language",
      skills: [
        "JavaScript",
        "TypeScript",
        "C#"
      ]
    },
    {
      id: 1,
      order: 1,
      parentId: 0,
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
    {
      id: 2,
      order: 2,
      parentId: 0,
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
    {
      id: 3,
      order: 3,
      parentId: 0,
      category: "Languages",
      skills: [
        "English",
        "Polish"
      ]
    }
  ]
})
@Injectable({ providedIn: "root" })
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class SkillStoreDatabaseMockState {}
import { Routes } from "@angular/router";

import { UsersPageComponent } from "../component/page/users/users-page.component";
import { SkillsPageComponent } from "../component/page/skills/skills-page.component";
import { ExperiencesPageComponent } from "../component/page/experiences/experiences-page.component";
import { EducationsPageComponent } from "../component/page/educations/educations-page.component";
import { ResumesPageComponent } from "../component/page/resumes/resumes-page.component";

export const routesConfig: Routes = [
    {
        path: "",
        redirectTo: "/users",
        pathMatch: "full"
    },
    {
        path: "users",
        component: UsersPageComponent
    },
    {
        path: "resumes",
        component: ResumesPageComponent
    },
    {
        path: "skills",
        component: SkillsPageComponent
    },
    {
        path: "experiences",
        component: ExperiencesPageComponent
    },
    {
        path: "educations",
        component: EducationsPageComponent
    },
    {
        path: "**",
        redirectTo: "/",
        pathMatch: "full"
    }
];
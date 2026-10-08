import { Routes } from "@angular/router";

import { UsersPageComponent } from "../component/page/users/users-page.component";
import { SkillsPageComponent } from "../component/page/skills/skills-page.component";

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
        path: "skills",
        component: SkillsPageComponent
    },
    {
        path: "**",
        redirectTo: "/",
        pathMatch: "full"
    }
];
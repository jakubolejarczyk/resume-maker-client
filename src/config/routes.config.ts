import { Routes } from "@angular/router";

import { UsersView } from "../view/users/users.view";
import { CompaniesView } from "../view/companies/companies.view";
import { ResumesView } from "../view/resumes/resumes.view";

export const routesConfig: Routes = [
    {
        path: "",
        redirectTo: "/users",
        pathMatch: "full"
    },
    {
        path: "users",
        component: UsersView,
        title: "Users"
    },
    {
        path: "comapnies",
        component: CompaniesView,
        title: "Companies"
    },
    {
        path: "resumes",
        component: ResumesView,
        title: "Resumes"
    },
    {
        path: "**",
        redirectTo: "/",
        pathMatch: "full"
    }
];
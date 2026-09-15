import { Routes } from '@angular/router';

import { ShowCompaniesView } from '../view/show-companies/show-companies-view';
import { ShowResumesView } from '../view/show-resumes/show-resumes-view';
import { ShowUsersView } from '../view/show-users/show-users-view';

export const routesConfig: Routes = [
    {
        path: "",
        redirectTo: "users",
        pathMatch: "full"
    },
    {
        path: "/resume-maker-client/users",
        title: "Users",
        component: ShowUsersView
    },
    {
        path: "/resume-maker-client/companies",
        title: "Companies",
        component: ShowCompaniesView
    },
    {
        path: "/resume-maker-client/resumes",
        title: "Resumes",
        component: ShowResumesView
    },
    {
        path: "**",
        redirectTo: "users",
        pathMatch: "full"
    }
];
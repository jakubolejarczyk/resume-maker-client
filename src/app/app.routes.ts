import { Routes } from '@angular/router';

import { ShowUsersView } from '../view/show-users/show-users-view';
import { ShowCompaniesView } from '../view/show-companies/show-companies-view';
import { ShowResumesView } from '../view/show-resumes/show-resumes-view';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "users",
        pathMatch: "full"
    },
    {
        path: "users",
        title: "Users",
        component: ShowUsersView
    },
    {
        path: "companies",
        title: "Companies",
        component: ShowCompaniesView
    },
    {
        path: "resumes",
        title: "Resumes",
        component: ShowResumesView
    },
    {
        path: "**",
        redirectTo: "users",
        pathMatch: "full"
    }
];

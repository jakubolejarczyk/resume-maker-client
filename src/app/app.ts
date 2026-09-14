import { Component } from '@angular/core';
import { ShowUsersView } from '../view/show-users/show-users-view';
import { CreateUserView } from '../view/create-user/create-user-view';
import { ShowCompaniesView } from '../view/show-companies/show-companies-view';
import { CreateCompanyView } from '../view/create-company/create-company-view';
import { ShowResumesView } from '../view/show-resumes/show-resumes-view';
import { CreateResumeView } from '../view/create-resume/create-resume-view';
import { NavComponent } from '../component/nav/nav-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    ShowUsersView,
    CreateUserView,
    ShowCompaniesView,
    CreateCompanyView,
    ShowResumesView,
    CreateResumeView,
    NavComponent
  ]
})
export class App {}

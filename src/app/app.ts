import { Component } from '@angular/core';

import { UsersView } from '../view/users/users-view';
import { UserView } from '../view/user/user-view';
import { CompaniesView } from '../view/companies/companies-view';
import { CompanyView } from '../view/company/company-view';
import { ResumesView } from '../view/resumes/resumes-view';
import { ResumeView } from '../view/resume/resume-view';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [UsersView, UserView, CompaniesView, CompanyView, ResumesView, ResumeView]
})
export class App {}

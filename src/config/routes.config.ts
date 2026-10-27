import { Routes } from '@angular/router';

import { UserPageComponent } from '../component/page/user/user-page.component';
import { ResumePageComponent } from '../component/page/resume/resume-page.component';
import { SkillPageComponent } from '../component/page/skill/skill-page.component';
import { ExperiencePageComponent } from '../component/page/experience/experience-page.component';
import { EducationPageComponent } from '../component/page/education/education-page.component';
import { userGuard } from '../guard/user.guard';
import { resumeGuard } from '../guard/resume.guard';

export const routesConfig: Routes = [
  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full',
  },
  {
    path: 'user',
    component: UserPageComponent,
  },
  {
    path: 'resume',
    component: ResumePageComponent,
    canActivate: [userGuard],
  },
  {
    path: 'skill',
    component: SkillPageComponent,
    canActivate: [resumeGuard],
  },
  {
    path: 'experience',
    component: ExperiencePageComponent,
    canActivate: [resumeGuard],
  },
  {
    path: 'education',
    component: EducationPageComponent,
    canActivate: [resumeGuard],
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

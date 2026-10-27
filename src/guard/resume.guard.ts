import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';

import { UserService } from '../service/user.service';
import { ResumeService } from '../service/resume.service';

export const resumeGuard: CanActivateFn = (): Observable<
  boolean | ReturnType<Router['currentUrlTree']>
> => {
  const router = inject(Router);
  const userService = inject(UserService);
  const resumeService = inject(ResumeService);
  return combineLatest({
    users: userService.getItems(),
    resumes: resumeService.getItems(),
  }).pipe(
    map(({ users, resumes }) => ({
      user: users.find((user) => user.metadata.isSelected),
      resume: resumes.find((resume) => resume.metadata.isSelected),
    })),
    map(({ user, resume }) => {
      if (user && resume) {
        return true;
      }
      if (resume) {
        return router.createUrlTree(['/resume']);
      }
      return router.createUrlTree(['/user']);
    }),
  );
};

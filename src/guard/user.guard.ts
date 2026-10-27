import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { map, Observable } from 'rxjs';

import { UserService } from '../service/user.service';

export const userGuard: CanActivateFn = (): Observable<
  boolean | ReturnType<Router['currentUrlTree']>
> => {
  const router = inject(Router);
  const service = inject(UserService);
  return service.getItems().pipe(
    map((items) => items.find((item) => item.metadata.isSelected)),
    map((item) => {
      if (item) {
        return true;
      }
      return router.createUrlTree(['/user']);
    }),
  );
};

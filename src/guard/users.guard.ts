import { inject } from "@angular/core";
import { CanActivateFn } from "@angular/router";
import { Store } from "@ngxs/store";

import { UsersApiAction } from "../api/action/users-api.action";

export const usersGuard: CanActivateFn = () => {
    const store = inject(Store);
    store.dispatch(new UsersApiAction.Init());
    return true;
};
import { inject } from "@angular/core";
import { CanActivateFn } from "@angular/router";
import { Store } from "@ngxs/store";

import { UsersActionStore } from "../domain/users/store/users-action.store";

export const usersGuard: CanActivateFn = () => {
    const store = inject(Store);
    store.dispatch(new UsersActionStore.InitDto());
    return true;
};
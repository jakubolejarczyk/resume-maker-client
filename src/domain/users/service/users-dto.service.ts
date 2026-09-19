import { inject, Injectable } from "@angular/core";
import { Store } from "@ngxs/store";

import { UsersStateStore } from "../store/users-state.store";

@Injectable({ providedIn: "root" })
export class UsersDtoService {
    store = inject(Store);

    readAll() {
        return this.store.select(UsersStateStore.getDtoUsers);
    }
}
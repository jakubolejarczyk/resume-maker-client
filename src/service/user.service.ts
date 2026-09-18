import { inject, Injectable } from "@angular/core";
import { Store } from "@ngxs/store";

import { DeleteUser } from "../store/action/user-store.action";

@Injectable({ providedIn: "root" })
export class UserService {
    store = inject(Store);

    delete(id: number) {
        this.store.dispatch(new DeleteUser(id));
    }
}
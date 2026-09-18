import { AsyncPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { Store } from "@ngxs/store";

import { UserStoreState } from "../../store/state/user-store.state";

@Component({
    selector: "app-users-table-component",
    templateUrl: "./users-table.component.html",
    styleUrl: "./users-table.component.scss",
    imports: [AsyncPipe]
})
export class UsersTableComponent {
    store = inject(Store);

    users$ = this.store.select(UserStoreState.getUsers);
}
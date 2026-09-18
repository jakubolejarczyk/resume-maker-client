import { Component, inject } from "@angular/core";
import { Store } from "@ngxs/store";
import { AsyncPipe } from "@angular/common";

import { UserStoreState } from "../../store/state/user-store.state";

@Component({
    selector: "app-list-component",
    templateUrl: "./list.component.html",
    styleUrl: "./list.component.scss",
    imports: [AsyncPipe]
})
export class ListComponent {
    store = inject(Store);

    users$ = this.store.select(UserStoreState.getUsers);
}
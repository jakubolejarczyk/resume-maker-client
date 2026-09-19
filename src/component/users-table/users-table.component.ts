import { AsyncPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { Store } from "@ngxs/store";

import { DeleteUser } from "../../store/action/user-store.action";
import { UsersDtoService } from "../../domain/users/service/users-dto.service";

@Component({
    selector: "app-users-table-component",
    templateUrl: "./users-table.component.html",
    styleUrl: "./users-table.component.scss",
    imports: [AsyncPipe]
})
export class UsersTableComponent {
    store = inject(Store);
    usersDtoService = inject(UsersDtoService);

    users$ = this.usersDtoService.readAll();

    delete(id: number) {
        this.store.dispatch(new DeleteUser(id));
    }
}
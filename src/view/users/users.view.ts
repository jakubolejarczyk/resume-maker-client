import { Component } from "@angular/core";

import { UsersTableComponent } from "../../component/users-table/users-table.component";

@Component({
    selector: "app-users-view",
    templateUrl: "./users.view.html",
    styleUrl: "./users.view.scss",
    imports: [UsersTableComponent]
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class UsersView {}
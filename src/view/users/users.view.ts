import { Component } from "@angular/core";

import { ListComponent } from "../../component/list/list.component";

@Component({
    selector: "app-users-view",
    templateUrl: "./users.view.html",
    styleUrl: "./users.view.scss",
    imports: [ListComponent]
})
export class UsersView {}
import { Component } from "@angular/core";

import { EntityViewComponent } from "../../view/entity/entity-view.component";
import { UserService } from "../../../service/user.service";

@Component({
    selector: "app-users-page-component",
    templateUrl: "./users-page.component.html",
    imports: [EntityViewComponent]
})
export class UsersPageComponent {
    baseServiceType = UserService;
}
import { Component } from "@angular/core";

import { DomainViewComponent } from "../../view/domain/domain-view.component";
import { UserService } from "../../../service/user.service";

@Component({
    selector: "app-users-page-component",
    templateUrl: "./users-page.component.html",
    imports: [DomainViewComponent]
})
export class UsersPageComponent {
    baseServiceType = UserService;
}
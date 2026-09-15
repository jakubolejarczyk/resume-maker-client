import { Component } from "@angular/core";

import { MenuComponent } from "../../component/menu/menu-component";
import { HamburgerComponent } from "../../component/hamburger/hamburget.component";

@Component({
    selector: "app-nav-dashboard",
    templateUrl: "./nav-dashboard.html",
    styleUrl: "./nav-dashboard.scss",
    imports: [MenuComponent, HamburgerComponent]
})
export class NavDashboard {
    isMenuVisible = false;

    onHamburgerEvent(event: boolean) {
        this.isMenuVisible = event;
    }
}
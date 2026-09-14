import { Component } from "@angular/core";

import { HamburgerComponent } from "../../component/hamburger/hamburget-component";
import { MenuComponent } from "../../component/menu/menu-component";

@Component({
    selector: "app-nav-dashboard",
    templateUrl: "./nav-dashboard.html",
    styleUrl: "./nav-dashboard.scss",
    imports: [HamburgerComponent, MenuComponent]
})
export class NavDashboard {
    isMenuVisible = false;

    onHamburgerEvent(event: boolean) {
        this.isMenuVisible = event;
    }
}
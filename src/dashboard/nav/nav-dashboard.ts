import { Component } from "@angular/core";

import { HamburgerComponent } from "../../component/hamburger/hamburget-component";

@Component({
    selector: "app-nav-dashboard",
    templateUrl: "./nav-dashboard.html",
    styleUrl: "./nav-dashboard.scss",
    imports: [HamburgerComponent]
})
export class NavDashboard {}
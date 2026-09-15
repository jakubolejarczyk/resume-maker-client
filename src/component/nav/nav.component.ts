import { Component } from "@angular/core";

import { HamburgerComponent } from "../hamburger/hamburget.component";

@Component({
    selector: "app-nav-component",
    templateUrl: "./nav.component.html",
    styleUrl: "./nav.component.scss",
    imports: [HamburgerComponent]
})
export class NavComponent {}
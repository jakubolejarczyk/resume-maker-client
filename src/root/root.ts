import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { NavComponent } from "../component/nav/nav.component";

@Component({
    selector: "app-root",
    templateUrl: "./root.html",
    styleUrl: "./root.scss",
    imports: [RouterOutlet, NavComponent]
})
export class Root {}
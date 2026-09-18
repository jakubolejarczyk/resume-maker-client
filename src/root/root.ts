import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { NavComponent } from "../component/nav/nav.component";
import { WindowDirective } from "../directive/window.directive";

@Component({
    selector: "app-root",
    templateUrl: "./root.html",
    styleUrl: "./root.scss",
    imports: [RouterOutlet, NavComponent, WindowDirective]
})
export class Root {}
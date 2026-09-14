import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "nav-component",
    templateUrl: "nav-component.html",
    styleUrl: "nav-component.scss",
    imports: [RouterLink]
})
export class NavComponent {}
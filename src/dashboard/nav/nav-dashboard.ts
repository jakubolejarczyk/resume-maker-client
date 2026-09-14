import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-nav-dashboard",
    templateUrl: "./nav-dashboard.html",
    styleUrl: "./nav-dashboard.scss",
    imports: [RouterLink]
})
export class NavDashboard {}
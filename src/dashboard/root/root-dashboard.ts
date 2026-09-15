import { Component } from "@angular/core";

import { ContentDashboard } from "../content/content-dashboard";
import { SelectionDashboard } from "../selection/selection-dashboard";
import { NavComponent } from "../../component/nav/nav.component";

@Component({
    selector: "app-root-dashboard",
    templateUrl: "./root-dashboard.html",
    styleUrl: "./root-dashboard.scss",
    imports: [ContentDashboard, SelectionDashboard, NavComponent]
})
export class RootDashboard {}
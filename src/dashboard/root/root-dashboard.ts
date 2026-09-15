import { Component } from "@angular/core";

import { ContentDashboard } from "../content/content-dashboard";
import { SelectionDashboard } from "../selection/selection-dashboard";

@Component({
    selector: "app-root-dashboard",
    templateUrl: "./root-dashboard.html",
    styleUrl: "./root-dashboard.scss",
    imports: [ContentDashboard, SelectionDashboard]
})
export class RootDashboard {}
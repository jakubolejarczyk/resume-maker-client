import { Component } from "@angular/core";

import { InputTextDumbComponent } from "../../dumb/input-text/input-text-dumb.component";

@Component({
    selector: "app-input-text-smart-component",
    templateUrl: "./input-text-smart.component.html",
    imports: [InputTextDumbComponent]
})
export class InputTextSmartComponent {}
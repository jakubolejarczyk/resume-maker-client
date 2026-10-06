import { Component } from "@angular/core";

import { InputTextDumbComponent } from "../../dumb/input-text/input-text-dumb.component";

@Component({
    selector: "input-text-smart-component",
    templateUrl: "./input-text-smart.component.html",
    imports: [InputTextDumbComponent]
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class InputTextSmartComponent {}
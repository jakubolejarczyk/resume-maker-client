import { Component, input } from "@angular/core";

import { InputTextDumbComponent } from "../../dumb/input-text/input-text-dumb.component";

@Component({
    selector: "input-text-smart-component",
    templateUrl: "./input-text-smart.component.html",
    imports: [InputTextDumbComponent]
})
export class InputTextSmartComponent {
    invalid = input(false);

    disabled = input(false);
}
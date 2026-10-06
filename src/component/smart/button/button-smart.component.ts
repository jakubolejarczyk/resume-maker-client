import { Component, input } from "@angular/core";
import { ButtonSeverity } from "primeng/button";

import { ButtonDumbComponent } from "../../dumb/button/button-dumb.component";

@Component({
    selector: "button-smart-component",
    templateUrl: "./button-smart.component.html",
    imports: [ButtonDumbComponent]
})
export class ButtonSmartComponent {
    label = input.required<string>();

    link = input(false);

    severity = input<ButtonSeverity>();

    disabled = input(false);
}
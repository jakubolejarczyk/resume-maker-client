import { Component, input, output } from "@angular/core";
import { ButtonSeverity } from "primeng/button";

import { ButtonDumbComponent } from "../../dumb/button/button-dumb.component";

@Component({
    selector: "app-button-smart-component",
    templateUrl: "./button-smart.component.html",
    imports: [ButtonDumbComponent]
})
export class ButtonSmartComponent {
    label = input.required<string>();

    severity = input<ButtonSeverity>();

    event = output();

    onEvent() {
        this.event.emit();
    }
}
import { Component, input, output } from "@angular/core";
import { ButtonModule, ButtonSeverity } from "primeng/button";

@Component({
    selector: "app-button-dumb-component",
    templateUrl: "./button-dumb.component.html",
    imports: [ButtonModule]
})
export class ButtonDumbComponent {
    label = input.required<string>();

    severity = input<ButtonSeverity>();

    event = output();

    onClick() {
        this.event.emit();
    }
}
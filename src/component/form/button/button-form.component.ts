import { Component, input, output } from "@angular/core";
import { ButtonModule, ButtonSeverity, ButtonSize } from "primeng/button";

@Component({
    selector: "app-button-form-component",
    templateUrl: "./button-form.component.html",
    imports: [ButtonModule]
})
export class ButtonFormComponent {
    label = input.required<string>();

    severity = input<ButtonSeverity>("primary");
    size = input<ButtonSize>("large");
    disabled = input(false);

    event = output();

    onClick() {
        this.event.emit();
    }
}
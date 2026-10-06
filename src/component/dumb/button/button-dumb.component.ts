import { Component, input } from "@angular/core";
import { ButtonModule, ButtonSeverity } from 'primeng/button';

@Component({
    selector: "button-dumb-component",
    templateUrl: "./button-dumb.component.html",
    imports: [ButtonModule]
})
export class ButtonDumbComponent {
    label = input.required<string>();

    link = input(false);

    severity = input<ButtonSeverity>();

    disabled = input(false);
}
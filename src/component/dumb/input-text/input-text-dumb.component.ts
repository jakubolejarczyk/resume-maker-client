import { Component, input } from "@angular/core";
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: "input-text-dumb-component",
    templateUrl: "./input-text-dumb.component.html",
    imports: [InputTextModule]
})
export class InputTextDumbComponent {
    invalid = input(false);

    disabled = input(false);
}
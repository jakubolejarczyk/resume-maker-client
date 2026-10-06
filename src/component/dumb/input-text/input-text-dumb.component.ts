import { Component } from "@angular/core";
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: "input-text-dumb-component",
    templateUrl: "./input-text-dumb.component.html",
    imports: [InputTextModule]
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class InputTextDumbComponent {}
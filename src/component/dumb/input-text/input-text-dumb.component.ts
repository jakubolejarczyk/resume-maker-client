import { Component } from "@angular/core";
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: "app-input-text-dumb-component",
    templateUrl: "./input-text-dumb.component.html",
    imports: [InputTextModule]
})
export class InputTextDumbComponent {}
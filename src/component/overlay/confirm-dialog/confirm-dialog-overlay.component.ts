import { Component } from "@angular/core";
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
    selector: "app-confirm-dialog-overlay-component",
    template: "<p-confirmdialog />",
    imports: [ConfirmDialogModule]
})
export class ConfirmDialogOverlayComponent {}
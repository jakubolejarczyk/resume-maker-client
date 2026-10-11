import { Component, input, output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";

import { BaseApiModel } from "../../../api/model/base-api.model";

@Component({
    selector: "app-dialog-overlay-component",
    templateUrl: "./dialog-overlay.component.html",
    imports: [ConfirmDialogModule, DialogModule, ButtonModule, InputTextModule, FormsModule]
})
export class DialogOverlayComponent<TModel extends BaseApiModel> {
    itemToUpdate = input<TModel>();

    onCancelEvent = output();

    onCancel() {
        this.onCancelEvent.emit();
    }

    onSave() {
        this.onCancelEvent.emit();
    }
}
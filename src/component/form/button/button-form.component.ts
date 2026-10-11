import { Component, inject, input, output } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { ButtonModule, ButtonSeverity, ButtonSize } from "primeng/button";
// import { ConfirmDialogModule } from "primeng/confirmdialog";
// import { ToastModule } from 'primeng/toast';

@Component({
    selector: "app-button-form-component",
    templateUrl: "./button-form.component.html",
    imports: [ButtonModule]
})
export class ButtonFormComponent {
    private readonly confirmationService = inject(ConfirmationService);
    private readonly messageService = inject(MessageService);

    // Inputs required
    label = input.required<string>();

    // Input optional
    size = input<ButtonSize>();
    severity = input<ButtonSeverity>();
    disabled = input(false);
    showConfirm = input(false);
    confirmMessage = input("Are you sure that you want to proceed?");
    confirmHeader = input("Confirmation");
    confirmAcceptButtonLabel = input("Save");

    // Outputs
    onClickEvent = output();

    onClick(event: Event) {
        if (this.showConfirm()) {
            this.confirmationService.confirm({
                target: event.target as EventTarget,
                message: this.confirmMessage(),
                header: this.confirmHeader(),
                closable: true,
                closeOnEscape: true,
                rejectButtonProps: {
                    label: "Cancel",
                    severity: "secondary",
                    outlined: true
                },
                acceptButtonProps: {
                    label: this.confirmAcceptButtonLabel(),
                    severity: "secondary" 
                },
                accept: () => {
                    this.messageService.add({
                        severity: "info",
                        summary: "Confirmed",
                        detail: "You have accepted"
                    });
                    this.onClickEvent.emit();
                },
                reject: () => {
                    this.messageService.add({
                        severity: "error",
                        summary: "Rejected",
                        detail: "You have rejected",
                        life: 3000
                    });
                }
            });
            return;
        } else {
            this.onClickEvent.emit();
        }
    }
}
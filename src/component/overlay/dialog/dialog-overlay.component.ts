import { Component, effect, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { LabelModule } from 'primeng/label';

@Component({
  selector: 'app-dialog-overlay-component',
  templateUrl: './dialog-overlay.component.html',
  imports: [
    DialogModule,
    ButtonModule,
    InputTextModule,
    LabelModule,
    FormsModule,
  ],
})
export class DialogOverlayComponent {
  dialogTrigger = input.required<{ header: string; id: number | undefined }>();

  header = '';
  visible = false;
  name = 'Amanda Miller';
  email = 'amanda@example.com';

  constructor() {
    effect(() => {
      const triggerValue = this.dialogTrigger();
      if (triggerValue.header === '') {
        return;
      }
      if (triggerValue.id === undefined) {
        this.header = triggerValue.header;
      } else {
        this.header = `${triggerValue.header} ${triggerValue.id}`;
      }
      this.visible = true;
    });
  }
}

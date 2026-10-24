import { Component } from '@angular/core';
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
  visible = true;

  name = 'Amanda Miller';

  email = 'amanda@example.com';
}

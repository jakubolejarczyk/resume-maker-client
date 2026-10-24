import { Component, effect, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { LabelModule } from 'primeng/label';
import { DatePickerModule } from 'primeng/datepicker';

import { BaseStoreColumnModel } from '../../../store/model/base-store.model';
import { BaseApiModel } from '../../../api/model/base/base-api.model';

@Component({
  selector: 'app-dialog-overlay-component',
  templateUrl: './dialog-overlay.component.html',
  imports: [
    DialogModule,
    ButtonModule,
    InputTextModule,
    LabelModule,
    FormsModule,
    DatePickerModule,
  ],
})
export class DialogOverlayComponent<TData> {
  dialogTrigger = input.required<{
    header: string;
    columns: BaseStoreColumnModel[];
    item?: BaseApiModel<TData>;
  }>();

  header = '';
  visible = false;
  name = 'Amanda Miller';
  email = 'amanda@example.com';
  columns: BaseStoreColumnModel[] = [];
  item: BaseApiModel<TData> | undefined;

  constructor() {
    effect(() => {
      const trigger = this.dialogTrigger();
      if (trigger.header === '') {
        return;
      }
      this.header = trigger.header;
      this.visible = true;
      this.columns = trigger.columns;
      this.item = trigger.item;
    });
  }
}

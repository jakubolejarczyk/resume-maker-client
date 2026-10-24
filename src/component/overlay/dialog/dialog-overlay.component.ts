import { Component, effect, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { LabelModule } from 'primeng/label';

import { BaseStoreColumnModel } from '../../../store/model/base-store.model';
import { BaseApiModel } from '../../../api/model/base/base-api.model';
import { DialogTriggerModel } from './dialog-trigger.model';

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
export class DialogOverlayComponent<TData> {
  dialogTrigger = input<DialogTriggerModel<TData> | undefined>(undefined);

  header = '';
  visible = false;
  columns: BaseStoreColumnModel[] = [];
  item: BaseApiModel<TData> | undefined;

  constructor() {
    effect(() => {
      const trigger = this.dialogTrigger();
      if (trigger === undefined) return;
      if (trigger.header === '') return undefined;
      this.header = trigger.header;
      this.visible = true;
      this.columns = trigger.columns;
      this.item = trigger.item;
    });
  }
}

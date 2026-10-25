import { Component, effect, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { LabelModule } from 'primeng/label';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTagsModule } from 'primeng/inputtags';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

import { BaseStoreColumnModel } from '../../../store/model/base-store.model';
import { BaseApiModel } from '../../../api/model/base/base-api.model';
import { DialogOverlayTriggerModel } from './dialog-overlay-trigger.model';

@Component({
  selector: 'app-dialog-overlay-component',
  templateUrl: './dialog-overlay.component.html',
  styleUrl: './dialog-overlay.component.scss',
  imports: [
    DialogModule,
    ButtonModule,
    InputTextModule,
    LabelModule,
    FormsModule,
    FloatLabelModule,
    DatePickerModule,
    InputTagsModule,
    CdkDrag,
    CdkDropList,
  ],
})
export class DialogOverlayComponent<TData> {
  dialogOverlayTrigger = input<DialogOverlayTriggerModel<TData> | undefined>(
    undefined,
  );

  id: DialogOverlayTriggerModel<TData>['id'] = 'read';
  header = '';
  columns: BaseStoreColumnModel[] = [];
  item: BaseApiModel<TData> | undefined;
  visible = false;
  data: Record<string, unknown | unknown[]> = {};

  // event = output<{ header: string; item: BaseApiModel<TData> }>();

  constructor() {
    effect(() => {
      const trigger = this.dialogOverlayTrigger();
      if (trigger === undefined) return;
      this.id = trigger.id;
      this.header = trigger.header;
      this.columns = trigger.columns;
      this.item = trigger.item;
      this.visible = true;
      this.data = structuredClone(this.item.data) as Record<string, unknown>;
    });
  }

  onCancel() {
    this.visible = false;
  }

  onSubmit() {
    // this.visible = false;
    console.log(this.data);
  }

  isDisabled() {
    return this.id === 'read';
  }

  getTags(key: string): string[] {
    const value: unknown = this.data[key];
    return Array.isArray(value)
      ? value.filter((tag): tag is string => typeof tag === 'string')
      : [];
  }

  dropTags(event: CdkDragDrop<string[]>, key: string): void {
    const tags = this.getTags(key);
    moveItemInArray(tags, event.previousIndex, event.currentIndex);
    this.data[key] = tags;
  }
}

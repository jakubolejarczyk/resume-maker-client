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
import { Trash } from '@primeicons/angular/trash';

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
    Trash,
  ],
})
export class DialogOverlayComponent<TData> {
  dialogOverlayTrigger = input<DialogOverlayTriggerModel<TData> | undefined>(
    undefined,
  );

  id: DialogOverlayTriggerModel<TData>['id'] = 'update';
  header = '';
  columns: BaseStoreColumnModel[] = [];
  item: BaseApiModel<TData> | undefined;
  visible = false;
  data: Record<string, unknown | unknown[]> = {};

  tagInput = '';

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
    console.log(this.data);
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

  addTag(key: string, event: Event): void {
    event.preventDefault();
    const tag = this.tagInput.trim();
    if (!tag) return;
    const tags = this.getTags(key);
    this.data[key] = [...tags, tag];
    this.tagInput = '';
  }

  removeTag(key: string, index: number): void {
    const tags = [...this.getTags(key)];
    tags.splice(index, 1);
    this.data[key] = tags;
  }
}

import { Component, effect, input, output } from '@angular/core';
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
import { TextareaModule } from 'primeng/textarea';
import { InputNumberModule } from 'primeng/inputnumber';

import { BaseStoreColumnModel } from '../../../store/model/base-store.model';
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
    TextareaModule,
    InputNumberModule,
  ],
})
export class DialogOverlayComponent<TData> {
  dialogOverlayTrigger = input<DialogOverlayTriggerModel<TData> | undefined>(
    undefined,
  );

  dataEvent = output<{
    id: DialogOverlayTriggerModel<TData>['id'];
    item: TData;
    itemId: number;
    parentId: number | undefined;
  }>();

  id: DialogOverlayTriggerModel<TData>['id'] = 'update';
  header = '';
  columns: BaseStoreColumnModel[] = [];
  item: TData | undefined;
  visible = false;
  data: Record<string, unknown | unknown[]> = {};
  tagInput = '';
  itemId = -1;
  parentId: number | undefined = -1;

  constructor() {
    effect(() => {
      const trigger = this.dialogOverlayTrigger();
      if (trigger === undefined) return;
      this.id = trigger.id;
      this.header = trigger.header;
      this.columns = trigger.columns;
      this.item = trigger.item;
      this.visible = true;
      this.itemId = trigger.itemId;
      this.parentId = trigger.parentId;
      this.data = structuredClone(this.item) as Record<string, unknown>;
    });
  }

  onCancel() {
    this.visible = false;
  }

  onSubmit() {
    if (this.item) {
      let itemClone = structuredClone(this.item);
      itemClone = this.deepMerge(itemClone, this.data);
      this.dataEvent.emit({
        id: this.id,
        item: itemClone,
        itemId: this.itemId,
        parentId: this.parentId,
      });
    }
    this.visible = false;
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

  isPlainObject(value: unknown): value is Record<string, unknown> {
    if (value === null || typeof value !== 'object') {
      return false;
    }
    const proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
  }

  deepMerge<T>(target: T, source: unknown): T {
    if (Array.isArray(target) && Array.isArray(source)) {
      const result: unknown[] = [...target];
      source.forEach((value, index) => {
        result[index] =
          index in target ? this.deepMerge(target[index], value) : value;
      });
      return result as T;
    }
    if (this.isPlainObject(target) && this.isPlainObject(source)) {
      const result: Record<string, unknown> = { ...target };
      for (const key of Object.keys(source)) {
        result[key] =
          key in target
            ? this.deepMerge(target[key], source[key])
            : source[key];
      }
      return result as T;
    }
    return source as T;
  }
}

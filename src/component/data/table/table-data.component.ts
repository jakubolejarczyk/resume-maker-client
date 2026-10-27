import { Component, input, output } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { TableModule } from 'primeng/table';
import { ButtonDirective } from 'primeng/button';
import { ArrowDown } from '@primeicons/angular/arrow-down';
import { ArrowUp } from '@primeicons/angular/arrow-up';
import { Trash } from '@primeicons/angular/trash';
import { FileEdit } from '@primeicons/angular/file-edit';
import { Bookmark } from '@primeicons/angular/bookmark';
import { BookmarkFill } from '@primeicons/angular/bookmark-fill';
import { Plus } from '@primeicons/angular/plus';

import { BaseStoreColumnModel } from '../../../store/model/base-store.model';
import { BaseApiModel } from '../../../api/model/base/base-api.model';

@Component({
  selector: 'app-table-data-component',
  templateUrl: './table-data.component.html',
  styleUrl: './table-data.component.scss',
  imports: [
    TableModule,
    ButtonDirective,
    AsyncPipe,
    ArrowDown,
    ArrowUp,
    Trash,
    FileEdit,
    Bookmark,
    BookmarkFill,
    Plus,
  ],
})
export class TableDataComponent<TData> {
  columns$ = input.required<Observable<BaseStoreColumnModel[]>>();
  items$ = input.required<Observable<BaseApiModel<TData>[]>>();
  parentId$ = input.required<Observable<number | undefined>>();

  onCreateEvent = output();
  onDeselectEvent = output<number>();
  onSelectEvent = output<number>();
  onUpdateEvent = output<BaseApiModel<TData>>();
  onDeleteEvent = output<number>();
  onMoveUpEvent = output<number>();
  onMoveDownEvent = output<number>();

  onCreate() {
    this.onCreateEvent.emit();
  }

  onDeselect(id: number) {
    this.onDeselectEvent.emit(id);
  }

  onSelect(id: number) {
    this.onSelectEvent.emit(id);
  }

  onUpdate(item: BaseApiModel<TData>) {
    this.onUpdateEvent.emit(item);
  }

  onDelete(id: number) {
    this.onDeleteEvent.emit(id);
  }

  onMoveUp(id: number) {
    this.onMoveUpEvent.emit(id);
  }

  onMoveDown(id: number) {
    this.onMoveDownEvent.emit(id);
  }

  isFirstItem(item: BaseApiModel<TData>) {
    return item.metadata.order === 0;
  }

  isLastItem(item: BaseApiModel<TData>, items: BaseApiModel<TData>[]) {
    const lastOrder = items.reduce((acc: number, curr) => {
      if (curr.metadata.order > acc) {
        acc = curr.metadata.order;
      }
      return acc;
    }, 0);
    return item.metadata.order === lastOrder;
  }
}

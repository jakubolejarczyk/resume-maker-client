import { Component, input, output } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { TableModule } from 'primeng/table';
import { ButtonDirective } from 'primeng/button';

import { BaseStoreColumnModel } from '../../../store/model/base-store.model';
import { BaseApiModel } from '../../../api/model/base/base-api.model';

@Component({
  selector: 'app-table-data-component',
  templateUrl: './table-data.component.html',
  imports: [TableModule, ButtonDirective, AsyncPipe],
})
export class TableDataComponent<TData> {
  columns$ = input.required<Observable<BaseStoreColumnModel[]>>();
  items$ = input.required<Observable<BaseApiModel<TData>[]>>();

  onDeselectEvent = output<number>();
  onSelectEvent = output<number>();
  onUpdateEvent = output<number>();
  onDeleteEvent = output<number>();
  onMoveUpEvent = output<number>();
  onMoveDownEvent = output<number>();

  onDeselect(id: number) {
    this.onDeselectEvent.emit(id);
  }

  onSelect(id: number) {
    this.onSelectEvent.emit(id);
  }

  onUpdate(id: number) {
    this.onUpdateEvent.emit(id);
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
}

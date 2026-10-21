import { Component } from '@angular/core';

@Component({
  selector: 'app-table-data-component',
  templateUrl: './table-data.component.html',
  styleUrl: './table-data.component.scss',
  //   imports: [TableModule, ButtonFormComponent, BadgeMiscComponent, AsyncPipe],
})
export class TableDataComponent {
  //   items$ = input.required<Observable<BaseApiModel[]>>();
  //   selectedItem$ = input.required<Observable<BaseApiModel | undefined>>();
  //   columns$ = input.required<Observable<BaseStoreModel<TModel>['columns']>>();
  //   onSelectEvent = output<TModel>();
  //   onDeselectEvent = output();
  //   onShowEvent = output<TModel>();
  //   onUpdateEvent = output<TModel>();
  //   onDeleteEvent = output<TModel>();
  //   onMoveUpEvent = output<TModel>();
  //   onMoveDownEvent = output<TModel>();
  //   onSelect(item: TModel) {
  //     this.onSelectEvent.emit(item);
  //   }
  //   onDeselect() {
  //     this.onDeselectEvent.emit();
  //   }
  //   onShow(item: TModel) {
  //     this.onShowEvent.emit(item);
  //   }
  //   onUpdate(item: TModel) {
  //     this.onUpdateEvent.emit(item);
  //   }
  //   onDelete(item: TModel) {
  //     this.onDeleteEvent.emit(item);
  //   }
  //   onMoveUp(item: TModel) {
  //     this.onMoveUpEvent.emit(item);
  //   }
  //   onMoveDown(item: TModel) {
  //     this.onMoveDownEvent.emit(item);
  //   }
  //   checkIsFirstItem(item: TModel) {
  //     return item.order === 0;
  //   }
  //   checkIsLastItem(item: TModel) {
  //     return this.items$().pipe(
  //       map((items) => items.sort((prev, next) => next.order - prev.order)[0]),
  //       map((lastItem) => lastItem.id === item.id),
  //     );
  //   }
}

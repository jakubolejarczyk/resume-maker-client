import {
  Component,
  inject,
  Injector,
  input,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { map, Observable, of, Subscription, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

import { TableDataComponent } from '../../data/table/table-data.component';
import { BaseService } from '../../../service/base.service';
import { BaseApiModel } from '../../../api/model/base/base-api.model';
import { BaseStoreColumnModel } from '../../../store/model/base-store.model';
import { DialogOverlayComponent } from '../../overlay/dialog/dialog-overlay.component';
import { DialogOverlayTriggerModel } from '../../overlay/dialog/dialog-overlay-trigger.model';

@Component({
  selector: 'app-domain-view-component',
  templateUrl: './domain-view.component.html',
  imports: [TableDataComponent, DialogOverlayComponent, AsyncPipe],
})
export class DomainViewComponent<TData, TParentData>
  implements OnInit, OnDestroy
{
  private readonly injector = inject(Injector);

  type = input.required<typeof BaseService<TData>>();
  parentType = input.required<typeof BaseService<TParentData>>();
  hasParent = input(true);

  columns$: Observable<BaseStoreColumnModel[]> = of([]);
  items$: Observable<BaseApiModel<TData>[]> = of([]);
  parentId$: Observable<number | undefined> = of(undefined);

  service!: BaseService<TData>;
  parentService!: BaseService<TParentData>;
  sub!: Subscription;

  dialogOverlayTrigger = signal<DialogOverlayTriggerModel<TData> | undefined>(
    undefined,
  );

  ngOnInit() {
    this.service = this.injector.get(this.type());
    this.parentService = this.injector.get(this.parentType());
    this.sub = this.service
      .readByParentId(undefined)
      .pipe(
        tap(() => {
          this.columns$ = this.service.getColumns();
          this.items$ = this.service.getItems();
          if (this.hasParent()) {
            this.parentId$ = this.parentService.getItems().pipe(
              map((items) =>
                items.reduce((acc: number | undefined, curr) => {
                  if (curr.metadata.isSelected) {
                    acc = curr.metadata.id;
                  }
                  return acc;
                }, undefined),
              ),
            );
          } else {
            this.parentId$ = of(undefined);
          }
        }),
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onDialogOverlayEvent(response: {
    id: DialogOverlayTriggerModel<TData>['id'];
    item: TData;
    itemId: number;
    parentId: number | undefined;
  }) {
    if (response.id === 'create') {
      this.service
        .create(response.parentId, response.item)
        .subscribe()
        .unsubscribe();
    } else if (response.id === 'update') {
      this.service
        .update(response.itemId, response.item)
        .subscribe()
        .unsubscribe();
    }
  }

  onCreateEvent(parentId: number | null | undefined) {
    if (parentId !== null) {
      this.dialogOverlayTrigger.update(() => ({
        id: 'create',
        header: 'Create',
        columns: this.service.getColumnsSnapshot(),
        item: this.service.createEmptyItem(),
        itemId: -1,
        parentId,
      }));
    }
  }

  onSelectEvent(id: number) {
    this.service.select(id).subscribe().unsubscribe();
  }

  onDeselectEvent(id: number) {
    this.service.deselect(id).subscribe().unsubscribe();
  }

  onUpdateEvent(item: BaseApiModel<TData>) {
    this.dialogOverlayTrigger.update(() => ({
      id: 'update',
      header: 'Update',
      columns: this.service.getColumnsSnapshot(),
      item: item.data,
      itemId: item.metadata.id,
      parentId: item.metadata.parentId,
    }));
  }

  onDeleteEvent(id: number) {
    this.service.delete(id).subscribe().unsubscribe();
  }

  onMoveUpEvent(id: number) {
    this.service.moveUp(id).subscribe().unsubscribe();
  }

  onMoveDownEvent(id: number) {
    this.service.moveDown(id).subscribe().unsubscribe();
  }
}

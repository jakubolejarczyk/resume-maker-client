import {
  Component,
  inject,
  Injector,
  input,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
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
  parentId$: Observable<number | null> = of(null);

  service!: BaseService<TData>;
  parentService!: BaseService<TParentData>;
  sub!: Subscription;

  dialogOverlayTrigger = signal<DialogOverlayTriggerModel<TData> | null>(null);

  ngOnInit() {
    this.service = this.injector.get(this.type());
    this.parentService = this.injector.get(this.parentType());
    this.columns$ = this.service.getColumns();
    this.items$ = this.service.getItems();
    this.parentId$ = this.hasParent()
      ? this.parentService.getSelectedItem()
      : of(null);
    this.sub = this.service.readByParentId(null).subscribe();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onDialogOverlayEvent(response: {
    id: DialogOverlayTriggerModel<TData>['id'];
    item: TData;
    itemId: number;
    parentId: number | null;
  }) {
    if (response.id === 'create') {
      this.service.create(response.parentId, response.item).subscribe();
    } else if (response.id === 'update') {
      this.service.update(response.itemId, response.item).subscribe();
    }
  }

  onCreateEvent(parentId: number | null) {
    this.dialogOverlayTrigger.update(() => ({
      id: 'create',
      header: 'Create',
      columns: this.service.getColumnsSnapshot(),
      item: this.service.createEmptyItem(),
      itemId: -1,
      parentId,
    }));
  }

  onSelectEvent(id: number) {
    this.service.select(id).subscribe();
  }

  onDeselectEvent(id: number) {
    this.service.deselect(id).subscribe();
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
    this.service.delete(id).subscribe();
  }

  onMoveUpEvent(id: number) {
    this.service.moveUp(id).subscribe();
  }

  onMoveDownEvent(id: number) {
    this.service.moveDown(id).subscribe();
  }
}

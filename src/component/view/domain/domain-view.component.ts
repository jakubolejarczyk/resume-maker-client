import {
  Component,
  inject,
  Injector,
  input,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { Observable, of, Subscription, tap } from 'rxjs';

import { TableDataComponent } from '../../data/table/table-data.component';
import { BaseService } from '../../../service/base.service';
import { BaseApiModel } from '../../../api/model/base/base-api.model';
import { BaseStoreColumnModel } from '../../../store/model/base-store.model';
import { DialogOverlayComponent } from '../../overlay/dialog/dialog-overlay.component';

@Component({
  selector: 'app-domain-view-component',
  templateUrl: './domain-view.component.html',
  imports: [TableDataComponent, DialogOverlayComponent],
})
export class DomainViewComponent<TData> implements OnInit, OnDestroy {
  private readonly injector = inject(Injector);

  type = input.required<typeof BaseService<TData>>();
  parentId = input.required<number | undefined>();

  columns$: Observable<BaseStoreColumnModel[]> = of([]);
  items$: Observable<BaseApiModel<TData>[]> = of([]);

  service!: BaseService<TData>;
  sub!: Subscription;

  dialogTrigger = signal<{
    header: string;
    columns: BaseStoreColumnModel[];
    item?: BaseApiModel<TData>;
  }>({
    header: '',
    columns: [],
    item: undefined,
  });

  ngOnInit() {
    this.service = this.injector.get(this.type());
    this.sub = this.service
      .readByParentId(undefined)
      .pipe(
        tap(() => {
          this.columns$ = this.service.getColumns();
          this.items$ = this.service.getItems();
        }),
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onCreateEvent() {
    this.dialogTrigger.update(() => ({
      header: 'Create',
      columns: this.service.getColumnsSnapshot(),
      item: undefined,
    }));
  }

  onSelectEvent(id: number) {
    this.service.select(id).subscribe().unsubscribe();
  }

  onDeselectEvent(id: number) {
    this.service.deselect(id).subscribe().unsubscribe();
  }

  onReadEvent(item: BaseApiModel<TData>) {
    this.dialogTrigger.update(() => ({
      header: 'Read',
      columns: this.service.getColumnsSnapshot(),
      item,
    }));
  }

  onUpdateEvent(item: BaseApiModel<TData>) {
    this.dialogTrigger.update(() => ({
      header: 'Update',
      columns: this.service.getColumnsSnapshot(),
      item,
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

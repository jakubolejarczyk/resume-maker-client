import {
  Component,
  inject,
  Injector,
  input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable, of, Subscription, tap } from 'rxjs';

import { TableDataComponent } from '../../data/table/table-data.component';
import { BaseService } from '../../../service/base.service';
import { BaseApiModel } from '../../../api/model/base/base-api.model';
import { BaseStoreColumnModel } from '../../../store/model/base-store.model';

@Component({
  selector: 'app-domain-view-component',
  templateUrl: './domain-view.component.html',
  imports: [TableDataComponent],
})
export class DomainViewComponent<TData> implements OnInit, OnDestroy {
  private readonly injector = inject(Injector);

  type = input.required<typeof BaseService<TData>>();
  parentId = input.required<number | undefined>();

  columns$: Observable<BaseStoreColumnModel[]> = of([]);
  items$: Observable<BaseApiModel<TData>[]> = of([]);

  service!: BaseService<TData>;
  sub!: Subscription;

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

  onSelectEvent(id: number) {
    this.service.select(id).subscribe().unsubscribe();
  }

  onDeselectEvent(id: number) {
    this.service.deselect(id).subscribe().unsubscribe();
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

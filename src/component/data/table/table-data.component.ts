import {
  Component,
  inject,
  Injector,
  input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { TableModule } from 'primeng/table';
import { AsyncPipe } from '@angular/common';
import { Observable, of, Subscription } from 'rxjs';
import { ButtonDirective } from 'primeng/button';

import { BaseService } from '../../../service/base.service';
import { BaseStoreColumnModel } from '../../../store/model/base-store.model';

@Component({
  selector: 'app-table-data-component',
  templateUrl: './table-data.component.html',
  styleUrl: './table-data.component.scss',
  imports: [TableModule, ButtonDirective, AsyncPipe],
})
export class TableDataComponent implements OnInit, OnDestroy {
  private readonly injector = inject(Injector);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type = input.required<any>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  service!: BaseService<any>;

  columns$: Observable<BaseStoreColumnModel[]> = of([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items$: Observable<any[]> = of([]);

  sub!: Subscription;

  ngOnInit() {
    this.service = this.injector.get(this.type());
    this.sub = this.service.readByParentId(undefined).subscribe();
    this.columns$ = this.service.getColumns();
    this.items$ = this.service.getItems();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onMoveUp(id: number) {
    this.service.moveUp(id).subscribe();
  }

  onMoveDown(id: number) {
    this.service.moveDown(id).subscribe();
  }

  onDelete(id: number) {
    this.service.delete(id).subscribe();
  }
}

import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { AsyncPipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { ButtonDirective } from 'primeng/button';

import { SkillService } from '../../../service/skill.service';

@Component({
  selector: 'app-table-data-component',
  templateUrl: './table-data.component.html',
  styleUrl: './table-data.component.scss',
  imports: [TableModule, ButtonDirective, AsyncPipe],
})
export class TableDataComponent implements OnInit, OnDestroy {
  service = inject(SkillService);

  sub!: Subscription;

  ngOnInit() {
    this.sub = this.service.readByParentId(undefined).subscribe();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getColumns() {
    return this.service.getColumns();
  }

  getItems() {
    return this.service.getItems();
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

import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { BaseLogicService } from '../../logic/service/base-logic.service';
import { ResponseLogicModel } from '../../logic/model/response-logic.model';
import { BaseDatabaseModel } from '../../database/model/base/base-database.model';

export class BaseApiService<TData> {
  private readonly service: BaseLogicService<TData>;
  private readonly http = inject(HttpClient);
  private readonly url = 'https://localhost:7125/api';

  constructor(
    private readonly type: typeof BaseLogicService<TData>,
    private readonly endpoint: string,
  ) {
    this.service = inject(type);
  }

  select(id: number) {
    return of(this.service.select(id));
  }

  deselect(id: number) {
    return of(this.service.deselect(id));
  }

  create(parentId: number | undefined, data: TData) {
    return of(this.service.create(parentId, data));
  }

  readById(id: number) {
    return of(this.service.readById(id));
  }

  readByParentId(
    parentId: number | undefined,
  ): Observable<ResponseLogicModel<BaseDatabaseModel<TData>[]>> {
    if (parentId !== undefined) {
      return this.http.get<ResponseLogicModel<BaseDatabaseModel<TData>[]>>(
        `${this.url}/${this.endpoint}?parentId=${parentId}`,
      );
    }
    return this.http.get<ResponseLogicModel<BaseDatabaseModel<TData>[]>>(
      `${this.url}/${this.endpoint}`,
    );
  }

  update(id: number, data: TData) {
    return of(this.service.update(id, data));
  }

  delete(id: number) {
    return of(this.service.delete(id));
  }

  moveUp(id: number) {
    return of(this.service.moveUp(id));
  }

  moveDown(id: number) {
    return of(this.service.moveDown(id));
  }
}

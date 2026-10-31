import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ResponseLogicModel } from '../../logic/model/response-logic.model';
import { BaseDatabaseModel } from '../../database/model/base/base-database.model';

export class BaseApiService<TData> {
  private readonly http = inject(HttpClient);
  private readonly url = 'https://localhost:7125/api';

  constructor(private readonly endpoint: string) {}

  select(id: number): Observable<ResponseLogicModel<BaseDatabaseModel<TData>>> {
    return this.http.post<ResponseLogicModel<BaseDatabaseModel<TData>>>(
      `${this.url}/${this.endpoint}/${id}/select`,
      null,
    );
  }

  deselect(
    id: number,
  ): Observable<ResponseLogicModel<BaseDatabaseModel<TData>>> {
    return this.http.post<ResponseLogicModel<BaseDatabaseModel<TData>>>(
      `${this.url}/${this.endpoint}/${id}/deselect`,
      null,
    );
  }

  create(
    parentId: number | null,
    data: TData,
  ): Observable<ResponseLogicModel<BaseDatabaseModel<TData>>> {
    const options =
      parentId !== null ? { params: { parentId: parentId.toString() } } : {};

    return this.http.post<ResponseLogicModel<BaseDatabaseModel<TData>>>(
      `${this.url}/${this.endpoint}`,
      data,
      options,
    );
  }

  readById(
    id: number,
  ): Observable<ResponseLogicModel<BaseDatabaseModel<TData>>> {
    return this.http.get<ResponseLogicModel<BaseDatabaseModel<TData>>>(
      `${this.url}/${this.endpoint}/${id}`,
    );
  }

  readByParentId(
    parentId: number | null,
  ): Observable<ResponseLogicModel<BaseDatabaseModel<TData>[]>> {
    const options =
      parentId !== null ? { params: { parentId: parentId.toString() } } : {};
    return this.http.get<ResponseLogicModel<BaseDatabaseModel<TData>[]>>(
      `${this.url}/${this.endpoint}`,
      options,
    );
  }

  update(
    id: number,
    data: TData,
  ): Observable<ResponseLogicModel<BaseDatabaseModel<TData>>> {
    return this.http.put<ResponseLogicModel<BaseDatabaseModel<TData>>>(
      `${this.url}/${this.endpoint}/${id}`,
      data,
    );
  }

  delete(id: number): Observable<ResponseLogicModel<BaseDatabaseModel<TData>>> {
    return this.http.delete<ResponseLogicModel<BaseDatabaseModel<TData>>>(
      `${this.url}/${this.endpoint}/${id}`,
    );
  }

  moveUp(id: number): Observable<ResponseLogicModel<BaseDatabaseModel<TData>>> {
    return this.http.post<ResponseLogicModel<BaseDatabaseModel<TData>>>(
      `${this.url}/${this.endpoint}/${id}/move-up`,
      null,
    );
  }

  moveDown(
    id: number,
  ): Observable<ResponseLogicModel<BaseDatabaseModel<TData>>> {
    return this.http.post<ResponseLogicModel<BaseDatabaseModel<TData>>>(
      `${this.url}/${this.endpoint}/${id}/move-down`,
      null,
    );
  }
}

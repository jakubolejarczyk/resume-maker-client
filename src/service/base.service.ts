import { inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { of, switchMap } from 'rxjs';

import { BaseApiService } from '../api/service/base-api.service';
import { BaseStoreAction } from '../store/action/base-store.action';
import {
  BaseStoreColumnModel,
  BaseStoreModel,
} from '../store/model/base-store.model';
import { BaseDatabaseModel } from '../database/model/base/base-database.model';

export class BaseService<TData> {
  baseApiService: BaseApiService<TData>;

  store = inject(Store);

  constructor(
    private readonly token: typeof BaseApiService<TData>,
    private readonly baseGetStatus: (state: BaseStoreModel<TData>) => {
      success: boolean;
      message: string;
    },
    private readonly baseGetIsLoading: (
      state: BaseStoreModel<TData>,
    ) => boolean,
    private readonly baseGetItems: (
      state: BaseStoreModel<TData>,
    ) => BaseDatabaseModel<TData>[],
    private readonly baseGetSelectedItem: (
      state: BaseStoreModel<TData>,
    ) => TData | undefined,
    private readonly baseGetColumns: (
      state: BaseStoreModel<TData>,
    ) => BaseStoreColumnModel[],
    private readonly baseSetStatus: typeof BaseStoreAction.SetStatus,
    private readonly baseSetIsLoading: typeof BaseStoreAction.SetIsLoading,
    private readonly baseSetItems: typeof BaseStoreAction.SetItems<TData>,
    private readonly baseSetSelectedItem: typeof BaseStoreAction.SetSelectedItem<TData>,
  ) {
    this.baseApiService = inject(token);
  }

  getStatus() {
    return this.store.select(this.baseGetStatus);
  }

  getIsLoading() {
    return this.store.select(this.baseGetIsLoading);
  }

  getItems() {
    throw new Error('Not implemented');
  }

  getSelectedItem() {
    throw new Error('Not implemented');
  }

  getColumns() {
    throw new Error('Not implemented');
  }

  select() {
    throw new Error('Not implemented');
  }

  deselect() {
    throw new Error('Not implemented');
  }

  create() {
    throw new Error('Not implemented');
  }

  readById() {
    throw new Error('Not implemented');
  }

  readByParentId(id: number | undefined) {
    return this.baseApiService.readByParentId(id).pipe(
      switchMap((response) => {
        const { success, message, body } = response;
        this.store.dispatch(new this.baseSetStatus(success, message));
        return of(body);
      }),
      switchMap((items) => this.store.dispatch(new this.baseSetItems(items))),
    );
  }

  update() {
    throw new Error('Not implemented');
  }

  delete() {
    throw new Error('Not implemented');
  }

  moveUp() {
    throw new Error('Not implemented');
  }

  moveDown() {
    throw new Error('Not implemented');
  }
}

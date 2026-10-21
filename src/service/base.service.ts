import { inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { filter, map, of, switchMap } from 'rxjs';

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
    ) => BaseDatabaseModel<TData> | undefined,
    private readonly baseGetColumns: (
      state: BaseStoreModel<TData>,
    ) => BaseStoreColumnModel[],
    private readonly baseSetStatus: typeof BaseStoreAction.SetStatus,
    private readonly baseSetIsLoading: typeof BaseStoreAction.SetIsLoading,
    private readonly baseSetItems: typeof BaseStoreAction.SetItems<TData>,
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
    return this.store.select(this.baseGetItems);
  }

  getSelectedItem() {
    return this.store.select(this.baseGetSelectedItem);
  }

  getColumns() {
    return this.store.select(this.baseGetColumns);
  }

  select(id: number) {
    return this.store.dispatch(new this.baseSetIsLoading(true)).pipe(
      switchMap(() => this.baseApiService.select(id)),
      switchMap((response) => {
        const { success, message, body } = response;
        this.store.dispatch(new this.baseSetStatus(success, message));
        if (!success && body === undefined) {
          this.store.dispatch(new this.baseSetIsLoading(false));
        }
        return of(body);
      }),
      filter((body) => body !== undefined),
      switchMap((body) =>
        this.baseApiService.readByParentId(body.metadata.parentId),
      ),
      switchMap((response) => of(response.body)),
      switchMap((items) => this.store.dispatch(new this.baseSetItems(items))),
      switchMap(() => this.store.dispatch(new this.baseSetIsLoading(false))),
    );
  }

  deselect(id: number) {
    return this.store.dispatch(new this.baseSetIsLoading(true)).pipe(
      switchMap(() => this.baseApiService.deselect(id)),
      switchMap((response) => {
        const { success, message, body } = response;
        this.store.dispatch(new this.baseSetStatus(success, message));
        if (!success && body === undefined) {
          this.store.dispatch(new this.baseSetIsLoading(false));
        }
        return of(body);
      }),
      filter((body) => body !== undefined),
      switchMap((body) =>
        this.baseApiService.readByParentId(body.metadata.parentId),
      ),
      switchMap((response) => of(response.body)),
      switchMap((items) => this.store.dispatch(new this.baseSetItems(items))),
      switchMap(() => this.store.dispatch(new this.baseSetIsLoading(false))),
    );
  }

  create(parentId: number | undefined, data: TData) {
    return this.store.dispatch(new this.baseSetIsLoading(true)).pipe(
      switchMap(() => this.baseApiService.create(parentId, data)),
      switchMap((response) => {
        const { success, message, body } = response;
        this.store.dispatch(new this.baseSetStatus(success, message));
        return of(body);
      }),
      switchMap((body) =>
        this.baseApiService.readByParentId(body.metadata.parentId),
      ),
      switchMap((response) => of(response.body)),
      switchMap((items) => this.store.dispatch(new this.baseSetItems(items))),
      switchMap(() => this.store.dispatch(new this.baseSetIsLoading(false))),
    );
  }

  readById(id: number) {
    return this.store.dispatch(new this.baseSetIsLoading(true)).pipe(
      switchMap(() => this.baseApiService.readById(id)),
      switchMap((response) => {
        const { success, message, body } = response;
        this.store.dispatch(new this.baseSetStatus(success, message));
        if (!success && body === undefined) {
          this.store.dispatch(new this.baseSetIsLoading(false));
        }
        return of(body);
      }),
      switchMap((body) =>
        this.store
          .dispatch(new this.baseSetIsLoading(false))
          .pipe(map(() => body)),
      ),
    );
  }

  readByParentId(parentId: number | undefined) {
    return this.store.dispatch(new this.baseSetIsLoading(true)).pipe(
      switchMap(() => this.baseApiService.readByParentId(parentId)),
      switchMap((response) => {
        const { success, message, body } = response;
        this.store.dispatch(new this.baseSetStatus(success, message));
        return of(body);
      }),
      switchMap((items) => this.store.dispatch(new this.baseSetItems(items))),
      switchMap(() => this.store.dispatch(new this.baseSetIsLoading(false))),
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

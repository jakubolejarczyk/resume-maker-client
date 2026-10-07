import { inject, ProviderToken } from "@angular/core";
import { Store } from "@ngxs/store";
import { of, switchMap } from "rxjs";

import { BaseApiModel } from "../api/model/base-api.model";
import { BaseStoreModel } from "../store/model/base-store.model";
import { BaseStoreAction } from "../store/action/base-store.action";
import { BaseApiService } from "../api/service/base-api.service";

type TBaseGetStatus = <TModel extends BaseApiModel>(state: BaseStoreModel<TModel>) => { success: boolean; message: string; };
type TBaseGetIsLoading = <TModel extends BaseApiModel>(state: BaseStoreModel<TModel>) => boolean;
type TBaseGetItems = <TModel extends BaseApiModel>(state: BaseStoreModel<TModel>) => TModel[];
type TBaseGetSelectedItem = <TModel extends BaseApiModel>(state: BaseStoreModel<TModel>) => TModel | undefined;
type TBaseGetColumns = <TModel extends BaseApiModel>(state: BaseStoreModel<TModel>) => BaseStoreModel<TModel>["columns"];

export class BaseService<TModel extends BaseApiModel> {
    baseApiService: BaseApiService<TModel>;

    store = inject(Store);

    constructor(
        private readonly token: ProviderToken<BaseApiService<TModel>>,
        private readonly baseGetStatus: TBaseGetStatus,
        private readonly baseGetIsLoading: TBaseGetIsLoading,
        private readonly baseGetItems: TBaseGetItems,
        private readonly baseGetSelectedItem: TBaseGetSelectedItem,
        private readonly baseGetColumns: TBaseGetColumns,
        private readonly baseSetStatus: typeof BaseStoreAction.SetStatus,
        private readonly baseSetIsLoading: typeof BaseStoreAction.SetIsLoading,
        private readonly baseSetItems: typeof BaseStoreAction.SetItems<TModel>,
        private readonly baseAddItem: typeof BaseStoreAction.AddItem<TModel>,
        private readonly baseUpdateItem: typeof BaseStoreAction.UpdateItem<TModel>,
        private readonly baseDeleteItem: typeof BaseStoreAction.DeleteItem,
        private readonly baseSetSelectedItem: typeof BaseStoreAction.SetSelectedItem<TModel>
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

    create(itemToCreate: Omit<TModel, "id">) {
        return of(true).pipe(
            switchMap(() => this.store.dispatch(new this.baseSetIsLoading(true))),
            switchMap(() => this.baseApiService.create(itemToCreate)),
            switchMap(response => {
                if (response.body) {
                    this.store.dispatch(new this.baseAddItem(response.body));
                }
                return of(response);
            }),
            switchMap(response => {
                const { success, message } = response;
                this.store.dispatch(new this.baseSetStatus(success, message));
                return of(true);
            }),
            switchMap(() => this.store.dispatch(new this.baseSetIsLoading(false)))
        );
    }

    read(id: number) {
        return of(true).pipe(
            switchMap(() => this.store.dispatch(new this.baseSetIsLoading(true))),
            switchMap(() => this.baseApiService.read(id)),
            switchMap(response => {
                const { success, message } = response;
                this.store.dispatch(new this.baseSetStatus(success, message));
                return of(response.body);
            }),
            switchMap(body => {
                this.store.dispatch(new this.baseSetIsLoading(false));
                return of(body);
            })
        );
    }

    readAll() {
        return of(true).pipe(
            switchMap(() => this.store.dispatch(new this.baseSetIsLoading(true))),
            switchMap(() => this.baseApiService.readAll()),
            switchMap(response => {
                this.store.dispatch(new this.baseSetItems(response.body));
                return of(response);
            }),
            switchMap(response => {
                const { success, message } = response;
                this.store.dispatch(new this.baseSetStatus(success, message));
                return of(true);
            }),
            switchMap(() => this.store.dispatch(new this.baseSetIsLoading(false)))
        );
    }

    update(itemToUpdate: TModel) {
        return of(true).pipe(
            switchMap(() => this.store.dispatch(new this.baseSetIsLoading(true))),
            switchMap(() => this.baseApiService.update(itemToUpdate)),
            switchMap(response => {
                if (response.body) {
                    this.store.dispatch(new this.baseUpdateItem(response.body));
                }
                return of(response);
            }),
            switchMap(response => {
                const { success, message } = response;
                this.store.dispatch(new this.baseSetStatus(success, message));
                return of(true);
            }),
            switchMap(() => this.store.dispatch(new this.baseSetIsLoading(false)))
        );
    }

    delete(id: number) {
        return of(true).pipe(
            switchMap(() => this.store.dispatch(new this.baseSetIsLoading(true))),
            switchMap(() => this.baseApiService.delete(id)),
            switchMap(response => {
                if (response.body) {
                    this.store.dispatch(new this.baseDeleteItem(response.body.id));
                }
                return of(response);
            }),
            switchMap(response => {
                const { success, message } = response;
                this.store.dispatch(new this.baseSetStatus(success, message));
                return of(true);
            }),
            switchMap(() => this.store.dispatch(new this.baseSetIsLoading(false)))
        );
    }

    selectItem(itemToSelect: TModel) {
        return of(true).pipe(
            switchMap(() => this.store.dispatch(new this.baseSetIsLoading(true))),
            switchMap(() => this.store.dispatch(new this.baseSetSelectedItem(itemToSelect))),
            switchMap(() => this.store.dispatch(new this.baseSetIsLoading(false)))
        );
    }
}
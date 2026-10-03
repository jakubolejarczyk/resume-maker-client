import { inject } from "@angular/core";
import { Store } from "@ngxs/store";

import { BaseApiModel } from "../api/model/base-api.model";
import { BaseStoreModel } from "../store/model/base-store.model";
import { BaseStoreAction } from "../store/action/base-store.action";

type TBaseGetStatus = <TModel extends BaseApiModel>(state: BaseStoreModel<TModel>) => { success: boolean; message: string; };
type TBaseGetIsLoading = <TModel extends BaseApiModel>(state: BaseStoreModel<TModel>) => boolean;
type TBaseGetItems = <TModel extends BaseApiModel>(state: BaseStoreModel<TModel>) => TModel[];
type TBaseGetSelectedItem = <TModel extends BaseApiModel>(state: BaseStoreModel<TModel>) => TModel | undefined;

export class BaseService {
    store = inject(Store);

    constructor(
        private readonly baseGetStatus: TBaseGetStatus,
        private readonly baseGetIsLoading: TBaseGetIsLoading,
        private readonly baseGetItems: TBaseGetItems,
        private readonly baseGetSelectedItem: TBaseGetSelectedItem,
        private readonly baseSetStatus: typeof BaseStoreAction.SetStatus
    ) {}

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

    setStatus(success: boolean, message: string) {
        return this.store.dispatch(new this.baseSetStatus(success, message));
    }
}
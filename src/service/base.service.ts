import { inject, ProviderToken } from "@angular/core";
import { Store } from "@ngxs/store";
import { Observable, switchMap } from "rxjs";

import { BaseApiService } from "../api/service/base-api.service";
import { BaseApiModel } from "../api/model/base-api.model";
import { TUnknown } from "../type/common.type";

export class BaseService<T extends BaseApiModel = BaseApiModel> {
    protected baseApiService: BaseApiService<T>;
    protected store = inject(Store);

    constructor(
        public token: ProviderToken<BaseApiService<T>>,
        private readonly readAllAction: new (items: T[]) => TUnknown
    ) {
        this.baseApiService = inject(token);
    }

    readAll(): Observable<void> {
        return this.baseApiService.readAll().pipe(
            switchMap(items => this.store.dispatch(new this.readAllAction(items)))
        );
    }
}
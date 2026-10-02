import { inject, ProviderToken } from "@angular/core";
import { Store } from "@ngxs/store";

import { BaseApiService } from "../api/service/base-api.service";
import { BaseApiModel } from "../api/model/base-api.model";
import { switchMap } from "rxjs";

export class BaseService<TModel extends BaseApiModel> {
    baseApiService: BaseApiService<TModel>;

    store = inject(Store);

    constructor(
        private readonly token: ProviderToken<BaseApiService<TModel>>,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        private readonly aaa: any
    ) {
        this.baseApiService = inject(token);
    }

    readAll() {
        return this.baseApiService.readAll().pipe(
            switchMap(response => this.store.dispatch(new this.aaa(response.body)))
        );
    }
}
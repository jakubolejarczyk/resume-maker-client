import { inject, ProviderToken } from "@angular/core";
import { Store } from "@ngxs/store";

import { BaseApiService } from "../api/service/base-api.service";
import { BaseApiModel } from "../api/model/base-api.model";

export class BaseService<T extends BaseApiModel = BaseApiModel> {
    protected baseApiService: BaseApiService<T>;
    protected store = inject(Store);

    constructor(protected token: ProviderToken<BaseApiService<T>>) {
        this.baseApiService = inject(token);
    }

    create() {
        throw new Error("Not implemented.");
    }

    read() {
        throw new Error("Not implemented.");
    }

    readAll() {
        throw new Error("Not implemented.");
    }

    update() {
        throw new Error("Not implemented.");
    }

    delete() {
        throw new Error("Not implemented.");
    }
}
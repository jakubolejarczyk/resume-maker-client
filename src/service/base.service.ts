import { inject, ProviderToken } from "@angular/core";
import { Store } from "@ngxs/store";

import { BaseApiService } from "../api/service/base-api.service";
import { BaseApiModel } from "../api/model/base-api.model";
import { Observable } from "rxjs";

export abstract class BaseService<T extends BaseApiModel = BaseApiModel> {
    protected baseApiService: BaseApiService<T>;
    protected store = inject(Store);

    constructor(protected token: ProviderToken<BaseApiService<T>>) {
        this.baseApiService = inject(token);
    }

    abstract create(): Observable<T>;

    abstract read(id: string): Observable<T | undefined>;

    abstract readAll(): Observable<T[]>;

    abstract update(): Observable<T>;

    abstract delete(id: string): Observable<T | undefined>;
}
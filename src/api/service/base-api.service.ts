import { inject, ProviderToken } from "@angular/core";
import { Observable, of } from "rxjs";

import { BaseMockService } from "../../mock/service/base-mock.service";
import { BaseApiModel } from "../model/base-api.model";
import { ResponseApiModel } from "../model/response-api.model";

export class BaseApiService<TModel extends BaseApiModel> {
    baseMockService: BaseMockService<TModel>;

    constructor(private readonly token: ProviderToken<BaseMockService<TModel>>) {
        this.baseMockService = inject(token);
    }

    create(itemToCreate: Omit<TModel, "id">): Observable<ResponseApiModel<TModel | undefined>> {
        return of(this.baseMockService.create(itemToCreate));
    }

    read(id: number): Observable<ResponseApiModel<TModel | undefined>> {
        return of(this.baseMockService.read(id));
    }

    readAll(): Observable<ResponseApiModel<TModel[]>> {
        return of(this.baseMockService.readAll());
    }

    update(itemToUpdate: TModel): Observable<ResponseApiModel<TModel | undefined>> {
        return of(this.baseMockService.update(itemToUpdate));
    }

    delete(id: number): Observable<ResponseApiModel<TModel | undefined>> {
        return of(this.baseMockService.delete(id));
    }
}
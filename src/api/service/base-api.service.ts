import { inject, ProviderToken } from "@angular/core";
import { of } from "rxjs";

import { BaseMockService } from "../../mock/service/base-mock.service";
import { BaseApiModel } from "../model/base-api.model";

export class BaseApiService<TModel extends BaseApiModel> {
    private baseMockService: BaseMockService<TModel>;

    constructor(protected readonly token: ProviderToken<BaseMockService<TModel>>) {
        this.baseMockService = inject(token);
    }

    create(itemToCreate: Omit<TModel, "id">) {
        return of(this.baseMockService.create(itemToCreate));
    }

    read(id: number) {
        return of(this.baseMockService.read(id));
    }

    readAll() {
        return of(this.baseMockService.readAll());
    }

    update(itemToUpdate: TModel) {
        return of(this.baseMockService.update(itemToUpdate));
    }

    delete(id: number) {
        return of(this.baseMockService.delete(id));
    }
}
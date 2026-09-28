import { inject, ProviderToken } from "@angular/core";

import { BaseApiModel } from "../model/base-api.model";
import { BaseMockService } from "../../mock/service/base-mock.service";

export class BaseApiService<T extends BaseApiModel = BaseApiModel> {
    private baseMockService: BaseMockService<T>;

    constructor(protected token: ProviderToken<BaseMockService<T>>) {
        this.baseMockService = inject(token);
    }

    create(itemToCreate: Omit<T, "id">) {
        return this.baseMockService.create(itemToCreate);
    }

    read(id: string) {
        return this.baseMockService.read(id);
    }

    readAll() {
        return this.baseMockService.readAll();
    }

    update(itemToUpdate: T) {
        return this.baseMockService.update(itemToUpdate);
    }

    delete(id: string) {
        return this.baseMockService.delete(id);
    }
}
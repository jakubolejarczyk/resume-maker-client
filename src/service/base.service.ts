import { inject, ProviderToken } from "@angular/core";

import { BaseApiService } from "../api/service/base-api.service";

export class BaseService {
    private baseApiService: BaseApiService;

    constructor(protected token: ProviderToken<BaseApiService>) {
        this.baseApiService = inject(token);
    }

    create() {
        return true;
    }

    read() {
        return true;
    }

    readAll() {
        return true;
    }

    update() {
        return true;
    }

    delete() {
        return true
    }
}
import { TestBed } from "@angular/core/testing";
import { Injectable } from "@angular/core";
import { Store } from "@ngxs/store";

import { BaseService } from "./base.service";
import { AnimalApiModel, AnimalApiService, API_PROVIDERS } from "../api/service/base-api.service.spec";
import { AnimalStoreAction, AnimalStoreState, STORE_PROVIDERS } from "../store/state/base-store.state.spec";

@Injectable()
class AnimalService extends BaseService<AnimalApiModel> {
    constructor() {
        super(AnimalApiService, AnimalStoreAction.SetItems);
    }
}

export const SERVICE_PROVIDERS = [API_PROVIDERS, STORE_PROVIDERS, AnimalService];

describe("Service", () => {
    let service: AnimalService;

    let store: Store;

    beforeEach(() => {
        TestBed.configureTestingModule({ providers: SERVICE_PROVIDERS });
        service = TestBed.inject(AnimalService);
        store = TestBed.inject(Store);
    });

    it("test", () => {
        service.readAll().subscribe(() => {
            const items = store.selectSnapshot(AnimalStoreState.getItems);
            expect(items).toEqual([
                { id: 0, name: "Dog" },
                { id: 1, name: "Cat" }
            ]);
        });
    });
});
import { Injectable } from "@angular/core";
import { switchMap, tap } from "rxjs";
import { TestBed } from "@angular/core/testing";

import { AnimalStoreAction, AnimalStoreState, STORE_PROVIDERS } from "../store/state/base-store.state.spec";
import { API_PROVIDERS } from "../api/service/base-api.service.spec";
import { BaseService } from "./base.service";

@Injectable()
class AnimalService extends BaseService {
    constructor() {
        super(
            AnimalStoreState.getStatus,
            AnimalStoreState.getIsLoading,
            AnimalStoreState.getItems,
            AnimalStoreState.getSelectedItem,
            AnimalStoreAction.SetStatus
        );
    }
}

export const SERVICE_PROVIDERS = [API_PROVIDERS, STORE_PROVIDERS, AnimalService];

describe("Service", () => {
    let service: AnimalService;

    beforeEach(() => {
        TestBed.configureTestingModule({ providers: SERVICE_PROVIDERS });
        service = TestBed.inject(AnimalService);
    });

    it("Should return a status containing success and message from the store.", () => {
        service.getStatus().subscribe(status => {
            expect(status).toEqual({
                success: true,
                message: ""
            });
        });
    });

    it("Should return a is loading from the store.", () => {
        service.getIsLoading().subscribe(isLoading => {
            expect(isLoading).toBeFalsy();
        });
    });

    it("Should return items from the store.", () => {
        service.getItems().subscribe(items => {
            expect(items).toEqual([
                { id: 0, name: "dog" },
                { id: 1, name: "cat" }
            ]);
        });
    });

    it("Should return the selected item from the store.", () => {
        service.getSelectedItem().subscribe(selectedItem => {
            expect(selectedItem).toBeUndefined();
        });
    });

    it("Should correctly change the status in the store.", () => {
        service.setStatus(false, "Login failed").pipe(
            switchMap(() => service.getStatus()),
            tap(status => expect(status).toEqual({
                success: false,
                message: "Login failed"
            }))
        ).subscribe();
    });
});
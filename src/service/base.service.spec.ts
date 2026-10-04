import { Injectable } from "@angular/core";
import { switchMap, tap } from "rxjs";
import { TestBed } from "@angular/core/testing";

import { AnimalStoreAction, AnimalStoreState, STORE_PROVIDERS } from "../store/state/base-store.state.spec";
import { AnimalApiModel, AnimalApiService, API_PROVIDERS } from "../api/service/base-api.service.spec";
import { BaseService } from "./base.service";

@Injectable()
class AnimalService extends BaseService<AnimalApiModel> {
    constructor() {
        super(
            AnimalApiService,
            AnimalStoreState.getStatus,
            AnimalStoreState.getIsLoading,
            AnimalStoreState.getItems,
            AnimalStoreState.getSelectedItem,
            AnimalStoreAction.SetStatus,
            AnimalStoreAction.SetIsLoading,
            AnimalStoreAction.SetItems,
            AnimalStoreAction.AddItem,
            AnimalStoreAction.UpdateItem,
            AnimalStoreAction.DeleteItem,
            AnimalStoreAction.SetSelectedItem
        );
    }
}

export const SERVICE_PROVIDERS = [API_PROVIDERS, STORE_PROVIDERS, AnimalService];

describe("Service", () => {
    let service: AnimalService;

    beforeEach(() => {
        TestBed.configureTestingModule({ providers: SERVICE_PROVIDERS });
        service = TestBed.inject(AnimalService);
        service.baseApiService.baseMockService.nextId = 2;
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
                { id: 0, name: "Dog" },
                { id: 1, name: "Cat" }
            ]);
        });
    });

    it("Should return the selected item from the store.", () => {
        service.getSelectedItem().subscribe(selectedItem => {
            expect(selectedItem).toBeUndefined();
        });
    });

    it("Should correctly create item from the store and save it in the external service.", () => {
        service.create({ name: "Bird" }).pipe(
            switchMap(() => service.getStatus()),
            tap(status => expect(status).toEqual({
                success: true,
                message: "Successfully created item."
            })),
            switchMap(() => service.getIsLoading()),
            tap(isLoading => expect(isLoading).toBeFalsy()),
            switchMap(() => service.getItems()),
            tap(items => {
                expect(items).toEqual([
                    { id: 0, name: "Dog" },
                    { id: 1, name: "Cat" },
                    { id: 2, name: "Bird" }
                ]);
            }),
            switchMap(() => service.getSelectedItem()),
            tap(selectedItem => expect(selectedItem).toBeUndefined())
        ).subscribe();
    });

    it("Should correctly read item from api.", () => {
        service.read(1).pipe(
            tap(item => expect(item).toEqual({ id: 1, name: "Cat" })),
            switchMap(() => service.getStatus()),
            tap(status => expect(status).toEqual({
                success: true,
                message: "Successfully retrieved item."
            })),
            switchMap(() => service.getIsLoading()),
            tap(isLoading => expect(isLoading).toBeFalsy()),
            switchMap(() => service.getSelectedItem()),
            tap(selectedItem => expect(selectedItem).toBeUndefined())
        ).subscribe();
    });

    it("Should correctly read all items from api and save it to the store.", () => {
        service.readAll().pipe(
            switchMap(() => service.getStatus()),
            tap(status => expect(status).toEqual({
                success: true,
                message: "Successfully retrieved all items."
            })),
            switchMap(() => service.getIsLoading()),
            tap(isLoading => expect(isLoading).toBeFalsy()),
            switchMap(() => service.getItems()),
            tap(items => expect(items).toEqual([
                { id: 0, name: "Dog" },
                { id: 1, name: "Cat" }
            ])),
            switchMap(() => service.getSelectedItem()),
            tap(selectedItem => expect(selectedItem).toBeUndefined())
        ).subscribe();
    });

    it("Should correctly update item from the store and save it in the external service.", () => {
        service.update({ id: 0, name: "Bird" }).pipe(
            switchMap(() => service.getStatus()),
            tap(status => expect(status).toEqual({
                success: true,
                message: "Successfully updated item."
            })),
            switchMap(() => service.getIsLoading()),
            tap(isLoading => expect(isLoading).toBeFalsy()),
            switchMap(() => service.getItems()),
            tap(items => expect(items).toEqual([
                { id: 0, name: "Bird" },
                { id: 1, name: "Cat" }
            ])),
            switchMap(() => service.getSelectedItem()),
            tap(selectedItem => expect(selectedItem).toBeUndefined())
        ).subscribe();
    });

    it("Should correctly select item from the store and save it in the selected item.", () => {
        service.selectItem({ id: 0, name: "Dog" }).pipe(
            switchMap(() => service.getIsLoading()),
            tap(isLoading => expect(isLoading).toBeFalsy()),
            switchMap(() => service.getItems()),
            tap(items => expect(items).toEqual([
                { id: 0, name: "Dog" },
                { id: 1, name: "Cat" }
            ])),
            switchMap(() => service.getSelectedItem()),
            tap(selectedItem => expect(selectedItem).toEqual({ id: 0, name: "Dog" }))
        ).subscribe();
    });
});
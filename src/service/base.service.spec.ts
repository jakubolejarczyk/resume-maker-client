import { switchMap, tap } from "rxjs";
import { TestBed } from "@angular/core/testing";

import { AnimalService } from "./animal.service";
import { ANIMAL_SERVICE_PROVIDER } from "./animal-service.provider";

describe("Service", () => {
    let service: AnimalService;

    beforeEach(() => {
        TestBed.configureTestingModule({ providers: ANIMAL_SERVICE_PROVIDER });
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

    it("Should return the columns from the store.", () => {
        service.getColumns().subscribe(columns => {
            expect(columns).toEqual(["id", "name"]);
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

    it("Should correctly delete item from the store and save it in the external service.", () => {
        service.delete(1).pipe(
            switchMap(() => service.getStatus()),
            tap(status => expect(status).toEqual({
                success: true,
                message: "Successfully deleted item."
            })),
            switchMap(() => service.getIsLoading()),
            tap(isLoading => expect(isLoading).toBeFalsy()),
            switchMap(() => service.getItems()),
            tap(items => expect(items).toEqual([
                { id: 0, name: "Dog" }
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
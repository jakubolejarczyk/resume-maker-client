import { Injectable } from "@angular/core";

import { BaseApiModel } from "../model/base-api.model";
import { BaseApiService } from "./base-api.service";
import { AnimalMockService } from "../../mock/service/base-mock.service.spec";
import { TestBed } from "@angular/core/testing";
import { ResponseApiModel } from "../model/response-api.model";

export interface AnimalApiModel extends BaseApiModel {
    name: string;
}

@Injectable()
export class AnimalApiService extends BaseApiService<AnimalApiModel> {
    constructor() {
        super(AnimalMockService);
    }
}

describe("Base Api Service", () => {
    let service: AnimalApiService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                AnimalMockService,
                AnimalApiService
            ]
        });
        service = TestBed.inject(AnimalApiService);
        service.baseMockService.nextId = 2;
    });

    it("Should return a success response and return the item to create for create method.", () => {
        service.create({ name: "Bird" }).subscribe(response => {
            expect(response).toEqual<ResponseApiModel<AnimalApiModel>>({
                success: true,
                message: "Successfully created item.",
                body: { id: 2, name: "Bird" }
            });
        });
        service.readAll().subscribe(response => {
            expect(response).toEqual<ResponseApiModel<AnimalApiModel[]>>({
                success: true,
                message: "Successfully retrieved all items.",
                body: [
                    { id: 0, name: "Dog" },
                    { id: 1, name: "Cat" },
                    { id: 2, name: "Bird" }
                ]
            });
        });
    });

    it("Should return an error response and return undefined body if item was not found for read method.", () => {
        service.read(2).subscribe(response => {
            expect(response).toEqual<ResponseApiModel<AnimalApiModel | undefined>>({
                success: false,
                message: "Item not found.",
                body: undefined
            });
        });
    });

    it("Should return a success response and return the item if it is found for read method.", () => {
        service.read(0).subscribe(response => {
            expect(response).toEqual<ResponseApiModel<AnimalApiModel | undefined>>({
                success: true,
                message: "Successfully retrieved item.",
                body: { id: 0, name: "Dog" }
            });
        });
    });

    it("Should return an error response and return an empty array if no items are found for read all method.", () => {
        service.baseMockService.items = [];
        service.baseMockService.nextId = 0;
        service.readAll().subscribe(response => {
            expect(response).toEqual<ResponseApiModel<AnimalApiModel[]>>({
                success: false,
                message: "No items found.",
                body: []
            });
        });
    });

    it("Should return a success response and return all items if items are found for read all method.", () => {
        service.readAll().subscribe(response => {
            expect(response).toEqual<ResponseApiModel<AnimalApiModel[]>>({
                success: true,
                message: "Successfully retrieved all items.",
                body: [
                    { id: 0, name: "Dog" },
                    { id: 1, name: "Cat" }
                ]
            });
        });
    });

    it("Should return an error response and return undefined body if item to update was not found for update method.", () => {
        service.update({ id: 2, name: "Bird" }).subscribe(response => {
            expect(response).toEqual<ResponseApiModel<AnimalApiModel | undefined>>({
                success: false,
                message: "Item to update not found.",
                body: undefined
            });
        });
        service.readAll().subscribe(response => {
            expect(response).toEqual<ResponseApiModel<AnimalApiModel[]>>({
                success: true,
                message: "Successfully retrieved all items.",
                body: [
                    { id: 0, name: "Dog" },
                    { id: 1, name: "Cat" }
                ]
            });
        });
    });

    it("Should return a success response and return the item to update if it is found for update method.", () => {
        service.update({ id: 0, name: "Updated Dog" }).subscribe(response => {
            expect(response).toEqual<ResponseApiModel<AnimalApiModel | undefined>>({
                success: true,
                message: "Successfully updated item.",
                body: { id: 0, name: "Updated Dog" }
            });
        });
        service.readAll().subscribe(response => {
            expect(response).toEqual<ResponseApiModel<AnimalApiModel[]>>({
                success: true,
                message: "Successfully retrieved all items.",
                body: [
                    { id: 0, name: "Updated Dog" },
                    { id: 1, name: "Cat" }
                ]
            });
        });
    });

    it("Should return an error response and return undefined body if item to delete was not found for delete method.", () => {
        service.delete(3).subscribe(response => {
            expect(response).toEqual<ResponseApiModel<AnimalApiModel | undefined>>({
                success: false,
                message: "Item not found.",
                body: undefined
            });
        });
        service.readAll().subscribe(response => {
            expect(response).toEqual<ResponseApiModel<AnimalApiModel[]>>({
                success: true,
                message: "Successfully retrieved all items.",
                body: [
                    { id: 0, name: "Dog" },
                    { id: 1, name: "Cat" }
                ]
            });
        });
    });

    it("Should return a success response and return the item to delete if it is found for delete method.", () => {
        service.delete(0).subscribe(response => {
            expect(response).toEqual<ResponseApiModel<AnimalApiModel | undefined>>({
                success: true,
                message: "Successfully deleted item.",
                body: { id: 0, name: "Dog" }
            });
        });
        service.readAll().subscribe(response => {
            expect(response).toEqual<ResponseApiModel<AnimalApiModel[]>>({
                success: true,
                message: "Successfully retrieved all items.",
                body: [
                    { id: 1, name: "Cat" }
                ]
            });
        });
    });
});
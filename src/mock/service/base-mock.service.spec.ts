import { BaseMockModel } from "../model/base-mock.model";
import { ResponseMockModel } from "../model/response-mock.model";
import { BaseMockService } from "./base-mock.service";

export interface AnimalMockModel extends BaseMockModel {
    name: string;
}

class AnimalMockService extends BaseMockService<AnimalMockModel> {
    constructor() {
        super([
            { id: 0, name: "Dog" },
            { id: 1, name: "Cat" }
        ], 2);
    }
}

describe("Base Mock Service", () => {
    let service: AnimalMockService;

    beforeEach(() => {
        service = new AnimalMockService();
    });

    it("Should return a success response and return the item to create for create method.", () => {
        expect(service.create({ name: "Bird" })).toEqual<ResponseMockModel<AnimalMockModel>>({
            success: true,
            message: "Successfully created item.",
            body: { id: 2, name: "Bird" }
        });
        expect(service.readAll()).toEqual<ResponseMockModel<AnimalMockModel[]>>({
            success: true,
            message: "Successfully retrieved all items.",
            body: [
                { id: 0, name: "Dog" },
                { id: 1, name: "Cat" },
                { id: 2, name: "Bird" }
            ]
        });
    });

    it("Should return an error response and return undefined body if item was not found for read method.", () => {
        expect(service.read(2)).toEqual<ResponseMockModel<AnimalMockModel | undefined>>({
            success: false,
            message: "Item not found.",
            body: undefined
        });
    });

    it("Should return a success response and return the item if it is found for read method.", () => {
        expect(service.read(0)).toEqual<ResponseMockModel<AnimalMockModel | undefined>>({
            success: true,
            message: "Successfully retrieved item.",
            body: { id: 0, name: "Dog" }
        });
    });

    it("Should return an error response and return an empty array if no items are found for read all method.", () => {
        service = new BaseMockService<AnimalMockModel>([], 0);
        expect(service.readAll()).toEqual<ResponseMockModel<AnimalMockModel[]>>({
            success: false,
            message: "No items found.",
            body: []
        });
    });

    it("Should return a success response and return all items if items are found for read all method.", () => {
        expect(service.readAll()).toEqual<ResponseMockModel<AnimalMockModel[]>>({
            success: true,
            message: "Successfully retrieved all items.",
            body: [
                { id: 0, name: "Dog" },
                { id: 1, name: "Cat" }
            ]
        });
    });

    it("Should return an error response and return undefined body if item to update was not found for update method.", () => {
        expect(service.update({ id: 2, name: "Bird" })).toEqual<ResponseMockModel<AnimalMockModel | undefined>>({
            success: false,
            message: "Item to update not found.",
            body: undefined
        });
        expect(service.readAll()).toEqual<ResponseMockModel<AnimalMockModel[]>>({
            success: true,
            message: "Successfully retrieved all items.",
            body: [
                { id: 0, name: "Dog" },
                { id: 1, name: "Cat" }
            ]
        });
    });

    it("Should return a success response and return the item to update if it is found for update method.", () => {
        expect(service.update({ id: 0, name: "Updated Dog" })).toEqual<ResponseMockModel<AnimalMockModel | undefined>>({
            success: true,
            message: "Successfully updated item.",
            body: { id: 0, name: "Updated Dog" }
        });
        expect(service.readAll()).toEqual<ResponseMockModel<AnimalMockModel[]>>({
            success: true,
            message: "Successfully retrieved all items.",
            body: [
                { id: 0, name: "Updated Dog" },
                { id: 1, name: "Cat" }
            ]
        });
    });

    it("Should return an error response and return undefined body if item to delete was not found for delete method.", () => {
        expect(service.delete(3)).toEqual<ResponseMockModel<AnimalMockModel | undefined>>({
            success: false,
            message: "Item not found.",
            body: undefined
        });
        expect(service.readAll()).toEqual<ResponseMockModel<AnimalMockModel[]>>({
            success: true,
            message: "Successfully retrieved all items.",
            body: [
                { id: 0, name: "Dog" },
                { id: 1, name: "Cat" }
            ]
        });
    });

    it("Should return a success response and return the item to delete if it is found for delete method.", () => {
        expect(service.delete(0)).toEqual<ResponseMockModel<AnimalMockModel | undefined>>({
            success: true,
            message: "Successfully deleted item.",
            body: { id: 0, name: "Dog" }
        });
        expect(service.readAll()).toEqual<ResponseMockModel<AnimalMockModel[]>>({
            success: true,
            message: "Successfully retrieved all items.",
            body: [
                { id: 1, name: "Cat" }
            ]
        });
    });
});
import { AnimalMockService } from "../service/animal-mock.service";
import { AnimalMockModel } from "../model/animal-mock.model";
import { ResponseMockModel } from "../model/response-mock.model";
import { BaseMockService } from "./base-mock.service";

describe("Base Mock Service", () => {
    let service: AnimalMockService;

    beforeEach(() => {
        service = new AnimalMockService();
        service.nextId = 2;
    });

    it("Should return a success response and return the item to create for create method.", () => {
        expect(service.create({ name: "Bird", order: 2 })).toEqual<ResponseMockModel<AnimalMockModel>>({
            success: true,
            message: "Successfully created item.",
            body: { id: 2, name: "Bird", order: 2 }
        });
        expect(service.readAll()).toEqual<ResponseMockModel<AnimalMockModel[]>>({
            success: true,
            message: "Successfully retrieved all items.",
            body: [
                { id: 0, name: "Dog", order: 0 },
                { id: 1, name: "Cat", order: 1 },
                { id: 2, name: "Bird", order: 2 }
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
            body: { id: 0, name: "Dog", order: 0 }
        });
    });

    it("Should return an error response and return an empty array if no items are found for read all method.", () => {
        service = new BaseMockService<AnimalMockModel>([]);
        service.nextId = 0;
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
                { id: 0, name: "Dog", order: 0 },
                { id: 1, name: "Cat", order: 1 }
            ]
        });
    });

    it("Should return an error response and return undefined body if item to update was not found for update method.", () => {
        expect(service.update({ id: 2, name: "Bird", order: 2 })).toEqual<ResponseMockModel<AnimalMockModel | undefined>>({
            success: false,
            message: "Item to update not found.",
            body: undefined
        });
        expect(service.readAll()).toEqual<ResponseMockModel<AnimalMockModel[]>>({
            success: true,
            message: "Successfully retrieved all items.",
            body: [
                { id: 0, name: "Dog", order: 0 },
                { id: 1, name: "Cat", order: 1 }
            ]
        });
    });

    it("Should return a success response and return the item to update if it is found for update method.", () => {
        expect(service.update({ id: 0, name: "Updated Dog", order: 0 })).toEqual<ResponseMockModel<AnimalMockModel | undefined>>({
            success: true,
            message: "Successfully updated item.",
            body: { id: 0, name: "Updated Dog", order: 0 }
        });
        expect(service.readAll()).toEqual<ResponseMockModel<AnimalMockModel[]>>({
            success: true,
            message: "Successfully retrieved all items.",
            body: [
                { id: 0, name: "Updated Dog", order: 0 },
                { id: 1, name: "Cat", order: 1 }
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
                { id: 0, name: "Dog", order: 0 },
                { id: 1, name: "Cat", order: 1 }
            ]
        });
    });

    it("Should return a success response and return the item to delete if it is found for delete method.", () => {
        expect(service.delete(0)).toEqual<ResponseMockModel<AnimalMockModel | undefined>>({
            success: true,
            message: "Successfully deleted item.",
            body: { id: 0, name: "Dog", order: 0 }
        });
        expect(service.readAll()).toEqual<ResponseMockModel<AnimalMockModel[]>>({
            success: true,
            message: "Successfully retrieved all items.",
            body: [
                { id: 1, name: "Cat", order: 1 }
            ]
        });
    });
});
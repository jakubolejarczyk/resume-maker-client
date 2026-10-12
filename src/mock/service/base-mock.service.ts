import { BaseMockModel } from "../model/base-mock.model";
import { ResponseMockModel } from "../model/response-mock.model";

export class BaseMockService<TModel extends BaseMockModel> {
    nextId = 0;

    constructor(public items: TModel[]) {}

    create(itemToCreate: Omit<TModel, "id">): ResponseMockModel<TModel> {
        const newUser = { ...itemToCreate, id: this.nextId++ } as TModel;
        this.items.push(newUser);
        const response: ResponseMockModel<TModel> = {
            success: true,
            message: "Successfully created item.",
            body: newUser
        };
        return response;
    }

    read(id: number): ResponseMockModel<TModel | undefined> {
        const item = this.items.find(item => item.id === id);
        if (item) {
            const response: ResponseMockModel<TModel | undefined> = {
                success: true,
                message: "Successfully retrieved item.",
                body: item
            };
            return response;
        }
        const response: ResponseMockModel<TModel | undefined> = {
            success: false,
            message: "Item not found.",
            body: undefined
        };
        return response;
    }

    readAll(): ResponseMockModel<TModel[]> {
        if (this.items.length === 0) {
            const response: ResponseMockModel<TModel[]> = {
                success: false,
                message: "No items found.",
                body: []
            };
            return response;
        }
        const response: ResponseMockModel<TModel[]> = {
            success: true,
            message: "Successfully retrieved all items.",
            body: this.items
        };
        return response;
    }

    update(itemToUpdate: TModel): ResponseMockModel<TModel | undefined> {
        const itemToUpdateExists = this.items.some(item => item.id === itemToUpdate.id);
        if (itemToUpdateExists) {
            this.items = this.items.map(item => item.id === itemToUpdate.id ? itemToUpdate : item);
            const response: ResponseMockModel<TModel | undefined> = {
                success: true,
                message: "Successfully updated item.",
                body: itemToUpdate
            };
            return response;
        }
        const response: ResponseMockModel<TModel | undefined> = {
            success: false,
            message: "Item to update not found.",
            body: undefined
        };
        return response;
    }

    delete(id: number): ResponseMockModel<undefined> {
        const itemToDelete = this.items.find(item => item.id === id);
        if (itemToDelete === undefined) {
            const response: ResponseMockModel<undefined> = {
                success: false,
                message: "Failed to delete the item because it does not exist.",
                body: undefined
            };
            return response;
        }
        this.items = this.items
            .filter(item => item.id !== itemToDelete.id)
            .reduce((acc: TModel[], curr: TModel, index) => {
                const newCurr: TModel = { ...curr, order: index };
                return [...acc, newCurr];
            }, []);
        const response: ResponseMockModel<undefined> = {
            success: true,
            message: "The item has been successfully deleted.",
            body: undefined
        };
        return response;
    }
}
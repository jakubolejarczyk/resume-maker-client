import { BaseMockModel } from "../model/base-mock.model";

export class BaseMockService<TModel extends BaseMockModel> {
    constructor(private items: TModel[]) {
        this.items = items;
    }

    create(itemToCreate: Omit<TModel, "id">) {
        const item = <TModel> {
            ...itemToCreate,
            id: this.items.length
        }
        this.items.push(item);
    }

    read(id: number) {
        return this.items.find(item => item.id === id);
    }

    readAll() {
        return this.items;
    }

    update(itemToUpdate: TModel) {
        this.items = this.items.map(item => {
            if (item.id === itemToUpdate.id) return itemToUpdate;
            return item;
        });
    }

    delete(id: number) {
        this.items = this.items.filter(item => item.id !== id);
    }
}
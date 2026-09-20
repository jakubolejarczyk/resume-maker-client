import { BaseMockModel } from "../model/base-mock.model";

export class BaseMockService<T extends BaseMockModel> {
    constructor(private items: T[]) {
        this.items = items;
    }

    create(item: Omit<T, "id">) {
        const itemToCreate = <T> {
            ...item,
            id: this.items.length
        };
        this.items.push(itemToCreate);
    }

    read(id: number) {
        return this.items.find(item => item.id === id);
    }

    readAll() {
        return this.items;
    }

    update(itemToUpdate: T) {
        this.items = this.items.map(item => item.id === itemToUpdate.id ? itemToUpdate : item);
    }

    delete(id: number) {
        this.items = this.items.filter(item => item.id !== id);
    }
}
import { of } from "rxjs";

import { BaseMockModel } from "../model/base-mock.model";

export class BaseMockService<T extends BaseMockModel> {
    constructor(private items: T[]) {
        this.items = items;
    }

    create(item: Omit<T, "id">) {
        const itemToCreate = <T> { ...item, id: this.items.length };
        this.items.push(itemToCreate);
        return of(itemToCreate);
    }

    read(id: number) {
        const item = this.items.find(item => item.id === id);
        return of(item);
    }

    readAll() {
        return of(this.items);
    }

    update(itemToUpdate: T) {
        this.items = this.items.map(item => item.id === itemToUpdate.id ? itemToUpdate : item);
        return of(itemToUpdate);
    }

    delete(id: number) {
        const itemToDelete = this.items.find(item => item.id === id);
        this.items = this.items.filter(item => item.id !== id);
        return of(itemToDelete);
    }
}
import { inject } from "@angular/core";
import { of } from "rxjs";

import { UUIDUtil } from "../../util/uuid.util";
import { BaseMockModel } from "../model/base-mock.model";

export class BaseMockService<T extends BaseMockModel = BaseMockModel> {
    uuidUtil = inject(UUIDUtil);

    constructor(private items: T[]) {}

    create(itemToCreate: Omit<T, "id">) {
        const newId = this.uuidUtil.generate();
        const newItem = <T> { ...itemToCreate, id: newId };
        this.items.push(newItem);
        return of(newItem);
    }

    read(id: string) {
        return of(this.items.find(item => item.id === id));
    }

    readAll() {
        return of(this.items);
    }

    update(itemToUpdate: T) {
        this.items = this.items.map(item => item.id === itemToUpdate.id ? itemToUpdate : item);
        return of(itemToUpdate);
    }

    delete(id: string) {
        const itemToDelete = this.items.find(item => item.id === id);
        this.items = this.items.filter(item => item.id !== id);
        return of(itemToDelete);
    }
}
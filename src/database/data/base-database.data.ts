import { BaseDatabaseModel } from "../model/base/base-database.model";

export class BaseDatabaseData<TData> {
    constructor(private items: BaseDatabaseModel<TData>[]) {}

    setItems(items: BaseDatabaseModel<TData>[]) {
        this.items = structuredClone(items);
    }

    getItems() {
        return structuredClone(this.items);
    }
}
import { BaseDatabaseModel } from "../model/base/base-database.model";

export class BaseDatabaseData<TData> {
    constructor(public items: BaseDatabaseModel<TData>[]) {}
}
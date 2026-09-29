import { BaseApiModel } from "../../api/model/base-api.model";

export class ReadAllBaseStoreAction<T extends BaseApiModel = BaseApiModel> {
    constructor(public items: T[]) {}
}
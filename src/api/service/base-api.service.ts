import { inject } from "@angular/core";
import { of } from "rxjs";

import { BaseLogicService } from "../../logic/service/base-logic.service";

export class BaseApiService<TData> {
    private readonly service: BaseLogicService<TData>;

    constructor(private readonly type: typeof BaseLogicService<TData>) {
        this.service = inject(type);
    }

    select(id: number) {
        return of(this.service.select(id));
    }

    deselect(id: number) {
        return of(this.service.deselect(id));
    }

    create(parentId: number | undefined, data: TData) {
        return of(this.service.create(parentId, data));
    }

    readById(id: number) {
        return of(this.service.readById(id));
    }

    readByParentId(parentId: number | undefined) {
        return of(this.service.readByParentId(parentId));
    }

    update(id: number, data: TData) {
        return of(this.service.update(id, data));
    }

    delete(id: number) {
        return of(this.service.delete(id));
    }

    moveUp(id: number) {
        return of(this.service.moveUp(id));
    }

    moveDown(id: number) {
        return of(this.service.moveDown(id));
    }
}
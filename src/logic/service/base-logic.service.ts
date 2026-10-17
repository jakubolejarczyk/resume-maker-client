import { inject } from "@angular/core";

import { BaseDatabaseService } from "../../database/service/base-database.service";

export class BaseLogicService<TData> {
    private readonly service: BaseDatabaseService<TData>;

    constructor(private readonly type: typeof BaseDatabaseService<TData>) {
        this.service = inject(type);
    }
    
    select(id: number) {
        const itemToSelect = this.service.readById(id);
        if (itemToSelect === undefined) return;
        const items = itemToSelect.metadata.parentId === undefined
            ? this.service.readAll()
            : this.service.readByParentId(itemToSelect.metadata.parentId);
        items.forEach(item => {
            if (item.metadata.id === itemToSelect.metadata.id) {
                item.metadata.isSelected = true;
            } else {
                item.metadata.isSelected = false;
            }
            this.service.update(item);
        });
    }

    deselect(id: number) {
        const itemToDeselect = this.service.readById(id);
        if (itemToDeselect === undefined) return;
        itemToDeselect.metadata.isSelected = false;
        this.service.update(itemToDeselect);
    }

    create() {
        throw new Error("Not implemented");
    }

    readByIds() {
        throw new Error("Not implemented");
    }

    readByParentIds() {
        throw new Error("Not implemented");
    }

    update() {
        throw new Error("Not implemented");
    }

    delete() {
        throw new Error("Not implemented");
    }

    moveUp(id: number) {
        const itemToMoveUp = this.service.readById(id);
        if (itemToMoveUp === undefined) return;
        if (itemToMoveUp.metadata.order === 0) return;
        const items = itemToMoveUp.metadata.parentId === undefined
            ? this.service.readAll()
            : this.service.readByParentId(itemToMoveUp.metadata.parentId);
        const prevItem = items.find(item => item.metadata.order === (itemToMoveUp.metadata.order - 1));
        if (prevItem === undefined) return;
        const itemToMoveUpOrder = itemToMoveUp.metadata.order;
        itemToMoveUp.metadata.order = prevItem.metadata.order;
        prevItem.metadata.order = itemToMoveUpOrder;
        this.service.update(itemToMoveUp);
        this.service.update(prevItem);
    }

    moveDown() {
        throw new Error("Not implemented");
    }
}
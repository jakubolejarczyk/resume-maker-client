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

    readById(id: number) {
        return this.service.readById(id);
    }

    readByParentId(parentId: number | undefined) {
        return parentId === undefined
            ? this.service.readAll()
            : this.service.readByParentId(parentId);
    }

    update() {
        throw new Error("Not implemented");
    }

    delete(id: number) {
        const itemToDelete = this.service.readById(id);
        if (itemToDelete === undefined) return;
        const { parentId } = itemToDelete.metadata;
        this.service.delete(itemToDelete.metadata.id);
        const itemsToUpdate = parentId === undefined
            ? this.service.readAll()
            : this.service.readByParentId(parentId);
        itemsToUpdate
            .sort((prev, next) => prev.metadata.order - next.metadata.order)
            .map((itemToUpdate, index) => {
                itemToUpdate.metadata.order = index;
                return itemToUpdate;
            })
            .forEach(itemToUpdate => this.service.update(itemToUpdate));
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

    moveDown(id: number) {
        const itemToMoveDown = this.service.readById(id);
        if (itemToMoveDown === undefined) return;
        const items = itemToMoveDown.metadata.parentId === undefined
            ? this.service.readAll()
            : this.service.readByParentId(itemToMoveDown.metadata.parentId);
        const lastOrder = items.reduce((acc: number, curr) => {
            if (curr.metadata.order > acc) {
                acc = curr.metadata.order;
            }
            return acc;
        }, 0);
        if (itemToMoveDown.metadata.order === lastOrder) return;
        const nextItem = items.find(item => item.metadata.order === (itemToMoveDown.metadata.order + 1));
        if (nextItem === undefined) return;
        const itemToMoveDownOrder = itemToMoveDown.metadata.order;
        itemToMoveDown.metadata.order = nextItem.metadata.order;
        nextItem.metadata.order = itemToMoveDownOrder;
        this.service.update(itemToMoveDown);
        this.service.update(nextItem);
    }
}
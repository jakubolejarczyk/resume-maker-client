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

    deselect() {
        throw new Error("Not implemented");
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

    moveUp() {
        throw new Error("Not implemented");
    }

    moveDown() {
        throw new Error("Not implemented");
    }
}
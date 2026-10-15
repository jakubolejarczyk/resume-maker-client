import { inject } from "@angular/core";

import { BaseDatabaseModel } from "../database/model/base-database.model";
import { BaseDatabaseService } from "../database/service/base-database.service";

export class BaseLogic<TItem extends BaseDatabaseModel> {
    private readonly service: BaseDatabaseService<TItem>;

    constructor(private readonly type: typeof BaseDatabaseService<TItem>) {
        this.service = inject(type);
    }

    select(ids: number[]) {
        const groups = this.service.readByIds(ids)
            .reduce((acc: Map<number, number[]>, curr: TItem) => {
                if (curr.hasParent && curr.parentId !== undefined) {
                    const group = acc.get(curr.parentId) ?? [];
                    group.push(curr.id);
                    acc.set(curr.parentId, group);
                } else {
                    const group = acc.get(-1) ?? [];
                    group.push(curr.id);
                    acc.set(-1, group);
                }
                return acc;
            }, new Map<number, number[]>())
        for (const [key, values] of groups.entries()) {
            if (key === -1) {
                const items = this.service.readAll()
                    .map(item => {
                        if (values.includes(item.id)) {
                            item.isSelected = true;
                            return item;
                        } else {
                            item.isSelected = false;
                            return item;
                        }
                    });
                this.service.update(items);
            } else {
                const items = this.service.readByParentIds([key])
                    .map(item => {
                        if (values.includes(item.id)) {
                            item.isSelected = true;
                            return item;
                        } else {
                            item.isSelected = false;
                            return item;
                        }
                    });
                this.service.update(items);
            }
        } 
    }

    deselect(ids: number[]) {
        const items = this.service.readByIds(ids)
            .map(item => {
                if (item.hasParent && item.parentId !== undefined) {
                    return this.service.readByParentIds([item.parentId])
                        .map(itemToUpdate => {
                            if (ids.includes(itemToUpdate.id)) {
                                return { ...itemToUpdate, isSelected: false };
                            }
                            return itemToUpdate;
                        });
                } else {
                    return this.service.readAll()
                        .map(itemToUpdate => {
                            if (ids.includes(item.id)) {
                                return { ...itemToUpdate, isSelected: false };
                            }
                            return itemToUpdate;
                        });
                }
            })
            .flat();
        this.service.update(items);
    }
}
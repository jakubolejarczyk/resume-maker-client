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
}
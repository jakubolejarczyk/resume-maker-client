import { Injectable } from "@angular/core";

import { BaseDatabaseService } from "../../database/service/base-database.service";
import { BaseDatabaseModel } from "../../database/model/base/base-database.model";

@Injectable({ providedIn: "root" })
export class DeselectLogicUtil<TItem extends BaseDatabaseModel> {
    service!: BaseDatabaseService<TItem>;
    
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
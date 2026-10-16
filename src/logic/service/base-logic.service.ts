import { inject } from "@angular/core";

import { BaseDatabaseModel } from "../../database/model/base/base-database.model";
import { BaseDatabaseService } from "../../database/service/base-database.service";
import { SelectLogicUtil } from "../util/select-logic.util";
import { DeselectLogicUtil } from "../util/deselect-logic.util";

export class BaseLogicService<TItem extends BaseDatabaseModel> {
    private readonly selectLogicUtil = inject(SelectLogicUtil);
    private readonly deselectLogicUtil = inject(DeselectLogicUtil);

    constructor(private readonly type: typeof BaseDatabaseService<TItem>) {
        this.selectLogicUtil.service = inject(type);
        this.deselectLogicUtil.service = inject(type);
    }

    select(ids: number[]) {
        this.selectLogicUtil.select(ids);   
    }

    deselect(ids: number[]) {
        this.deselectLogicUtil.deselect(ids);
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
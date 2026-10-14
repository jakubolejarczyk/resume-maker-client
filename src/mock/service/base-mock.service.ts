import { inject } from "@angular/core";
import { Store } from "@ngxs/store";

import { BaseStoreDatabaseMockAction } from "../database/store/action/base-store-database-mock.action";
import { BaseDatabaseMockModel } from "../database/model/base-database-mock.model";
import { BaseStoreDatabaseMockModel } from "../database/store/model/base-store-database-mock.model";

export class BaseMockService<TState extends BaseDatabaseMockModel> {
    protected store = inject(Store);

    constructor(
        protected readonly baseGetItems: (state: BaseStoreDatabaseMockModel<TState>) => TState[],
        protected readonly baseDeleteByIds: typeof BaseStoreDatabaseMockAction.DeleteByIds,
        protected readonly baseDeleteByParentIds: typeof BaseStoreDatabaseMockAction.DeleteByParentIds
    ) {}

    deleteByIds(ids: number[]) {
        return this.store.dispatch(new this.baseDeleteByIds(ids));
    }

    deleteByParentIds(parentIds: number[]) {
        return this.store.dispatch(new this.baseDeleteByParentIds(parentIds));
    }
}
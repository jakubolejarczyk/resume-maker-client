import { inject, Injectable } from "@angular/core";
import { switchMap } from "rxjs";

import { BaseMockService } from "./base-mock.service";
import { UserStoreDatabaseMockAction } from "../database/store/action/user-store-database-mock.action";
import { UserStoreDatabaseMockState } from "../database/store/state/user-store-database-mock.state";
import { UserDatabaseMockModel } from "../database/model/user-database-mock.model";
import { ResumeMockService } from "./resume-mock.service";

@Injectable({ providedIn: "root" })
export class UserMockService extends BaseMockService<UserDatabaseMockModel> {
    resumeMockService = inject(ResumeMockService);

    constructor() {
        super(
            UserStoreDatabaseMockState.getItems,
            UserStoreDatabaseMockAction.DeleteByIds,
            UserStoreDatabaseMockAction.DeleteByParentIds
        );
    }

    override deleteByIds(ids: number[]) {
        return super.deleteByIds(ids).pipe(
            switchMap(() => this.resumeMockService.deleteByParentIds(ids))
        );
    }

    // override deleteByParentIds(parentIds: number[]) {
    //     return this.store.selectOnce(this.baseGetItems).pipe(
    //         map((items) => items.filter(item => item.parentId !== undefined ? parentIds.includes(item.parentId) : true)),
    //         map((items) => items.map(item => item.id)),
    //         switchMap((ids) => this.educationMockService.deleteByParentIds(ids).pipe(map(() => ids))),
    //         switchMap((ids) => this.experienceMockService.deleteByParentIds(ids).pipe(map(() => ids))),
    //         switchMap((ids) => this.skillMockService.deleteByParentIds(ids)),
    //         switchMap(() => super.deleteByParentIds(parentIds))
    //     );
    // }
}
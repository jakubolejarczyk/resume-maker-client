import { inject, Injectable } from "@angular/core";
import { switchMap } from "rxjs";

import { BaseMockService } from "./base-mock.service";
import { UserStoreDatabaseMockAction } from "../database/store/action/user-store-database-mock.action";
import { UserStoreDatabaseMockState } from "../../database/service/user-database.service";
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

    override delete(ids: number[]) {
        return super.delete(ids).pipe(
            switchMap(() => this.resumeMockService.delete(ids))
        );
    }
}
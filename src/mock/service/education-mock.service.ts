import { Injectable } from "@angular/core";

import { BaseMockService } from "./base-mock.service";
import { EducationStoreDatabaseMockAction } from "../database/store/action/education-store-database-mock.action";
import { EducationDatabaseMockModel } from "../database/model/education-database-mock.model";
import { EducationStoreDatabaseMockState } from "../database/store/state/education-store-database-mock.state";

@Injectable({ providedIn: "root" })
export class EducationMockService extends BaseMockService<EducationDatabaseMockModel> {
    constructor() {
        super(
            EducationStoreDatabaseMockState.getItems,
            EducationStoreDatabaseMockAction.DeleteByIds,
            EducationStoreDatabaseMockAction.DeleteByParentIds
        );
    }
}
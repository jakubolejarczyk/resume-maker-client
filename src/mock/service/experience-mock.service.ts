import { Injectable } from "@angular/core";

import { BaseMockService } from "./base-mock.service";
import { ExperienceStoreDatabaseMockAction } from "../database/store/action/experience-store-database-mock.action";
import { ExperienceDatabaseMockModel } from "../database/model/experience-database-mock.model";
import { ExperienceStoreDatabaseMockState } from "../../database/service/experience-database.service";

@Injectable({ providedIn: "root" })
export class ExperienceMockService extends BaseMockService<ExperienceDatabaseMockModel> {
    constructor() {
        super(
            ExperienceStoreDatabaseMockState.getItems,
            ExperienceStoreDatabaseMockAction.DeleteByIds,
            ExperienceStoreDatabaseMockAction.DeleteByParentIds
        );
    }
}
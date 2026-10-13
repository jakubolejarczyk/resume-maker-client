import { Injectable } from "@angular/core";

import { BaseMockService } from "./base-mock.service";
import { ExperienceStoreDatabaseMockAction } from "../database/store/action/experience-store-database-mock.action";

@Injectable({ providedIn: "root" })
export class ExperienceMockService extends BaseMockService {
    delete(id: number) {
        return this.store.dispatch(new ExperienceStoreDatabaseMockAction.Delete(id));
    }
}
import { Injectable } from "@angular/core";

import { BaseMockService } from "./base-mock.service";
import { EducationStoreDatabaseMockAction } from "../database/store/action/education-store-database-mock.action";

@Injectable({ providedIn: "root" })
export class EducationMockService extends BaseMockService {
    delete(id: number) {
        return this.store.dispatch(new EducationStoreDatabaseMockAction.Delete(id));
    }
}
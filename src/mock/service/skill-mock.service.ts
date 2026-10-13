import { Injectable } from "@angular/core";

import { BaseMockService } from "./base-mock.service";
import { SkillStoreDatabaseMockAction } from "../database/store/action/skill-store-database-mock.action";

@Injectable({ providedIn: "root" })
export class SkillMockService extends BaseMockService {
    delete(id: number) {
        return this.store.dispatch(new SkillStoreDatabaseMockAction.Delete(id));
    }
}
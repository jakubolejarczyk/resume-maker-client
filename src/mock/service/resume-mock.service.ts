import { Injectable } from "@angular/core";

import { BaseMockService } from "./base-mock.service";
import { ResumeStoreDatabaseMockAction } from "../database/store/action/resume-store-database-mock.action";

@Injectable({ providedIn: "root" })
export class ResumeMockService extends BaseMockService {
    delete(id: number) {
        return this.store.dispatch(new ResumeStoreDatabaseMockAction.Delete(id));
    }
}
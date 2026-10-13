import { Injectable } from "@angular/core";

import { BaseMockService } from "./base-mock.service";
import { UserStoreDatabaseMockAction } from "../database/store/action/user-store-database-mock.action";

@Injectable({ providedIn: "root" })
export class UserMockService extends BaseMockService {
    delete(id: number) {
        return this.store.dispatch(new UserStoreDatabaseMockAction.Delete(id));
    }
}
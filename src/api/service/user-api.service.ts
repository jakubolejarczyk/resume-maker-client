import { inject, Injectable } from "@angular/core";

import { UserMockService } from "../../mock/service/user-mock.service";

@Injectable({ providedIn: "root" })
export class UserApiService {
    service = inject(UserMockService);

    test() {
        return this.service.readAll();
    }
}
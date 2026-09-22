import { inject, Injectable } from "@angular/core";

import { UserMockService } from "../../mock/service/user-mock.service";

@Injectable({ providedIn: "root" })
export class UserApiService {
    userMockService = inject(UserMockService);

    read(id: string) {
        return this.userMockService.read(id);
    }

    readAll() {
        return this.userMockService.readAll();
    }

    delete(id: string) {
        return this.userMockService.delete(id);
    }
}
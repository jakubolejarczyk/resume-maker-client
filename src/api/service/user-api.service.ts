import { inject, Injectable } from "@angular/core";

import { UserMockService } from "../../mock/service/user-mock.service";
import { UserApiModel } from "../model/user-api.model";

@Injectable({ providedIn: "root" })
export class UserApiService {
    userMockService = inject(UserMockService);

    create(userToCreate: UserApiModel) {
        return this.userMockService.create(userToCreate);
    }

    read(id: string) {
        return this.userMockService.read(id);
    }

    readAll() {
        return this.userMockService.readAll();
    }

    update(userToUpdate: UserApiModel) {
        return this.userMockService.update(userToUpdate);
    }

    delete(id: string) {
        return this.userMockService.delete(id);
    }
}
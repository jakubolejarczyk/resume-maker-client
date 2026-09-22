import { inject, Injectable } from "@angular/core";

import { UserMockService } from "../../mock/service/user-mock.service";

@Injectable({ providedIn: "root" })
export class UserApiService {
    service = inject(UserMockService);

    test() {
        return this.service.readAll();
    }

    test2() {
        return this.service.create({
            firstName: "a",
            lastName: "b",
            jobTitle: "c",
            email: "d",
            countryCode: "e",
            phoneNumber: "f",
            city: "g",
            country: "h",
            links: [],
            summary: "i"
        });
    }
}
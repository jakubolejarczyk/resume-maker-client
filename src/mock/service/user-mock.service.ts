import { Injectable } from "@angular/core";

import { BaseMockService } from "./base-mock.service";
import { UserMockModel } from "../model/user-mock.model";

@Injectable({ providedIn: "root" })
export class UserMockService extends BaseMockService<UserMockModel> {
    constructor() {
        super([
            {
                id: 0,
                firstName: "Jakub",
                lastName: "Olejarczyk",
                jobTitle: "Senior Software Engineer",
                email: "jakub.olejarczyk@outlook.com",
                phoneNumber: "+48 501 007 197",
                city: "Kielce",
                country: "Poland"
            }
        ]);
    }
}
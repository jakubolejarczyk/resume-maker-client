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
                phone: "+48 501 007 197",
                email: "jakub.olejarczyk@outlook.com",
                city: "Kielce",
                country: "Poland",
                links: [
                    "linkedin.com/in/jakub-olejarczyk",
                    "github.com/jakubolejarczyk",
                    "leetcode.com/u/JakubOlejarczyk"
                ],
                languages: ["English", "Polish"]
            }
        ]);
    }
}
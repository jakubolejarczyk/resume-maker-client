import { Service } from "@angular/core";

import { UserDataDatabaseModel } from "../model/data/user-data-database.model";
import { BaseDatabaseData } from "./base-database.data";

@Service()
export class UserDatabaseData extends BaseDatabaseData<UserDataDatabaseModel> {
    constructor() {
        super([
            {
                id: 0,
                data: {
                    firstName: "Jakub",
                    lastName: "Olejarczyk",
                    phoneNumber: "+48 501 007 197",
                    email: "jakub.olejarczyk@outlook.com",
                    city: "Kielce",
                    country: "Poland",
                    links: [
                        "olejarczykjakub.com",
                        "linkedin.com/in/jakub-olejarczyk",
                        "github.com/jakubolejarczyk",
                        "leetcode.com/u/JakubOlejarczyk"
                    ]
                },
                metadata: {
                    order: 0,
                    isSelected: false
                }
            }
        ]);
    }
}
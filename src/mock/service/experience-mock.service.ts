import { Injectable } from "@angular/core";

import { BaseMockService } from "./base-mock.service";
import { ExperienceMockModel } from "../model/experience-mock.model";

@Injectable({ providedIn: "root" })
export class ExperienceMockService extends BaseMockService<ExperienceMockModel> {
    constructor() {
        super([
            {
                id: 0,
                company: "APR System",
                jobTitle: "",
                description: []
            },
            {
                id: 1,
                company: "Primaris",
                jobTitle: "",
                description: []
            }
        ]);
    }
}
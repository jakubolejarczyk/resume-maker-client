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
                startDate: "2020-07-01",
                endDate: "2025-02-01",
                description: []
            },
            {
                id: 1,
                company: "Primaris",
                startDate: "2025-06-01",
                endDate: undefined,
                description: []
            }
        ]);
    }
}
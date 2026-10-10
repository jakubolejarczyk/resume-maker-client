import { Injectable } from "@angular/core";

import { ResumeMockModel } from "../model/resume-mock.model";
import { BaseMockService } from "./base-mock.service";

@Injectable({ providedIn: "root" })
export class ResumeMockService extends BaseMockService<ResumeMockModel> {
    constructor() {
        super([
            {
                id: 0,
                name: "Resume Jakub Olejarczyk ENG",
                order: 0,
                userId: 0
            }
        ]);
    }
}
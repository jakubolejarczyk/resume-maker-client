import { Injectable } from "@angular/core";

import { EducationMockService } from "../../mock/service/education-mock.service";
import { BaseApiService } from "./base-api.service";

@Injectable({ providedIn: "root" })
export class EducationApiService extends BaseApiService {
    constructor() {
        super(EducationMockService);
    }
}
import { Injectable } from "@angular/core";

import { EducationMockService } from "../../mock/service/education-mock.service";
import { BaseApiService } from "./base-api.service";
import { EducationApiModel } from "../model/education-api.model";

@Injectable({ providedIn: "root" })
export class EducationApiService extends BaseApiService<EducationApiModel> {
    constructor() {
        super(EducationMockService);
    }
}
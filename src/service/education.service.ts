import { Injectable } from "@angular/core";

import { BaseService } from "./base.service";
import { EducationApiService } from "../api/service/education-api.service";
import { EducationApiModel } from "../api/model/education-api.model";

@Injectable({ providedIn: "root" })
export class EducationService extends BaseService<EducationApiModel> {
    constructor() {
        super(EducationApiService);
    }
}
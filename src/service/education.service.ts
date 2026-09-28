import { Injectable } from "@angular/core";

import { BaseService } from "./base.service";
import { EducationApiService } from "../api/service/education-api.service";

@Injectable({ providedIn: "root" })
export class EducationService extends BaseService {
    constructor() {
        super(EducationApiService);
    }
}
import { Injectable } from "@angular/core";

import { BaseApiService } from "./base-api.service";
import { ResumeMockService } from "../../mock/service/resume-mock.service";
import { ResumeApiModel } from "../model/resume-api.model";

@Injectable({ providedIn: "root" })
export class ResumeApiService extends BaseApiService<ResumeApiModel> {
    constructor() {
        super(ResumeMockService);
    }
}
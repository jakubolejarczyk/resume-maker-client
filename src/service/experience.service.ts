import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { BaseService } from "./base.service";
import { ExperienceApiService } from "../api/service/experience-api.service";
import { ExperienceApiModel } from "../api/model/experience-api.model";

@Injectable({ providedIn: "root" })
export class ExperienceService extends BaseService<ExperienceApiModel> {
    constructor() {
        super(ExperienceApiService);
    }

    override create(): Observable<ExperienceApiModel> {
        throw new Error("Method not implemented.");
    }
    
    override read(): Observable<ExperienceApiModel> {
        throw new Error("Method not implemented.");
    }
    
    override readAll(): Observable<ExperienceApiModel[]> {
        throw new Error("Method not implemented.");
    }

    override update(): Observable<ExperienceApiModel> {
        throw new Error("Method not implemented.");
    }
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    override delete(id: string): Observable<ExperienceApiModel> {
        throw new Error("Method not implemented.");
    }
}
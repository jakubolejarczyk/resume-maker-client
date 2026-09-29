import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { BaseService } from "./base.service";
import { EducationApiService } from "../api/service/education-api.service";
import { EducationApiModel } from "../api/model/education-api.model";

@Injectable({ providedIn: "root" })
export class EducationService extends BaseService<EducationApiModel> {
    constructor() {
        super(EducationApiService);
    }

    override create(): Observable<EducationApiModel> {
        throw new Error("Method not implemented.");
    }
    
    override read(): Observable<EducationApiModel> {
        throw new Error("Method not implemented.");
    }
    
    override readAll(): Observable<EducationApiModel[]> {
        throw new Error("Method not implemented.");
    }

    override update(): Observable<EducationApiModel> {
        throw new Error("Method not implemented.");
    }
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    override delete(id: string): Observable<EducationApiModel> {
        throw new Error("Method not implemented.");
    }
}
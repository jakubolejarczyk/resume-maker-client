import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { BaseService } from "./base.service";
import { SkillApiService } from "../api/service/skill-api.service";
import { SkillApiModel } from "../api/model/skill-api.model";

@Injectable({ providedIn: "root" })
export class SkillService extends BaseService<SkillApiModel> {
    constructor() {
        super(SkillApiService);
    }

    override create(): Observable<SkillApiModel> {
        throw new Error("Method not implemented.");
    }
    
    override read(): Observable<SkillApiModel> {
        throw new Error("Method not implemented.");
    }
    
    override readAll(): Observable<SkillApiModel[]> {
        throw new Error("Method not implemented.");
    }

    override update(): Observable<SkillApiModel> {
        throw new Error("Method not implemented.");
    }
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    override delete(id: string): Observable<SkillApiModel> {
        throw new Error("Method not implemented.");
    }
}
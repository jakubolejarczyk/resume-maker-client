import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { BaseService } from "./base.service";
import { UserApiService } from "../api/service/user-api.service";
import { UserApiModel } from "../api/model/user-api.model";

@Injectable({ providedIn: "root" })
export class UserService extends BaseService<UserApiModel> {
    constructor() {
        super(UserApiService);
    }

    override create(): Observable<UserApiModel> {
        throw new Error("Method not implemented.");
    }
    
    override read(): Observable<UserApiModel> {
        throw new Error("Method not implemented.");
    }
    
    override readAll(): Observable<UserApiModel[]> {
        throw new Error("Method not implemented.");
    }
    
    override update(): Observable<UserApiModel> {
        throw new Error("Method not implemented.");
    }
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    override delete(id: string): Observable<UserApiModel> {
        throw new Error("Method not implemented.");
    }
}
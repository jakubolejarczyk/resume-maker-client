import { Injectable } from "@angular/core";
import { map, Observable, switchMap, tap } from "rxjs";

import { BaseService } from "./base.service";
import { TestUserApiModel, TestUserApiService } from "../api/service/base-api.service.spec";
import { ReadAllTestUserStoreAction } from "../store/action/test-user-store.action";

@Injectable({ providedIn: "root" })
export class TestUserService extends BaseService<TestUserApiModel> {
    constructor() {
        super(TestUserApiService);
    }

    override create(): Observable<TestUserApiModel> {
        throw new Error("Method not implemented.");
    }
    
    override read(id: string): Observable<TestUserApiModel | undefined> {
        return this.baseApiService.read(id).pipe(
            switchMap(testUser => {
                return this.readAll().pipe(
                    map(() => testUser)
                );
            })
        );
    }
    
    override readAll(): Observable<TestUserApiModel[]> {
        return this.baseApiService.readAll().pipe(
            tap(testUsers => this.store.dispatch(new ReadAllTestUserStoreAction(testUsers)))
        );
    }
    
    override update(): Observable<TestUserApiModel> {
        throw new Error("Method not implemented.");
    }
    
    override delete(id: string): Observable<TestUserApiModel | undefined> {
        return this.baseApiService.delete(id).pipe(
            switchMap(testUser => {
                return this.readAll().pipe(
                    map(() => testUser)
                );
            })
        );
    }
}
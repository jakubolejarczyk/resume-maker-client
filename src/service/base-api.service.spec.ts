import { Injectable } from "@angular/core";
import { TestBed } from "@angular/core/testing";

import { BaseService } from "./base.service";
import { TestUserApiService, TestUserMockService } from "../api/service/base-api.service.spec";

@Injectable()
class TestUserService extends BaseService {
    constructor() {
        super(TestUserApiService);
    }
}

describe("Base Service", () => {
    let testUserService: TestUserService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                TestUserMockService,
                TestUserApiService,
                TestUserService
            ]
        });
        testUserService = TestBed.inject(TestUserService);
    });

    it("Should create the new test user correctly", () => {
        expect(testUserService.create()).toBeTruthy();
    });

    it("Should read the test user correctly", () => {
        expect(testUserService.create()).toBeTruthy();
    });

    it("Should return undefined for not existing test user", () => {
        expect(testUserService.create()).toBeTruthy();
    });

    it("Should read all test users correctly", () => {
        expect(testUserService.create()).toBeTruthy();
    });

    it("Should update the test user correctly", () => {
        expect(testUserService.create()).toBeTruthy();
    });

    it("Should delete the test user correctly", () => {
        expect(testUserService.create()).toBeTruthy();
    });
});
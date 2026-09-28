import { Injectable } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { combineLatest } from "rxjs";
import { Mocked } from "vitest";

import { BaseMockModel } from "../../mock/model/base-mock.model";
import { BaseMockService } from "../../mock/service/base-mock.service";
import { UUIDUtil } from "../../util/uuid.util";
import { BaseApiService } from "./base-api.service";
import { BaseApiModel } from "../model/base-api.model";

interface TestUserMockModel extends BaseMockModel {
    firstName: string;
    lastName: string;
}

export class TestUserMockService extends BaseMockService<TestUserMockModel> {
    constructor() {
        super([
            {
                id: "98945f79-6293-4e98-8756-bc471d956fda",
                firstName: "John",
                lastName: "Smith"
            }
        ]);
    }
}

interface TestUserApiModel extends BaseApiModel {
    firstName: string;
    lastName: string;
}

@Injectable()
export class TestUserApiService extends BaseApiService<TestUserApiModel> {
    constructor() {
        super(TestUserMockService);
    }
}

const uuidStrub: Mocked<UUIDUtil> = {
    generate: vi.fn()
};

describe("Base API Service", () => {
    let testUserApiService: TestUserApiService;

    beforeEach(() => {
        uuidStrub.generate.mockReturnValue("a34d19c6-6cce-4887-a4dc-48d03b3134f5");
        TestBed.configureTestingModule({
            providers: [
                TestUserMockService,
                TestUserApiService,
                { provide: UUIDUtil, useValue: uuidStrub }
            ]
        });
        testUserApiService = TestBed.inject(TestUserApiService);
    });

    it("Should create the new test user correctly", () => {
        combineLatest({
            testUser: testUserApiService.create({
                firstName: "James",
                lastName: "Brown"
            }),
            testUsers: testUserApiService.readAll()
        }).subscribe(({ testUser, testUsers }) => {
            expect(testUser).toEqual({
                id: "a34d19c6-6cce-4887-a4dc-48d03b3134f5",
                firstName: "James",
                lastName: "Brown"
            });
            expect(testUsers).toEqual([
                {
                    id: "98945f79-6293-4e98-8756-bc471d956fda",
                    firstName: "John",
                    lastName: "Smith"
                },
                {
                    id: "a34d19c6-6cce-4887-a4dc-48d03b3134f5",
                    firstName: "James",
                    lastName: "Brown"
                }
            ]);
        });
    });

    it("Should read the test user correctly", () => {
        testUserApiService.read("98945f79-6293-4e98-8756-bc471d956fda").subscribe(testUser => {
            expect(testUser).toEqual({
                id: "98945f79-6293-4e98-8756-bc471d956fda",
                firstName: "John",
                lastName: "Smith"
            });
        });
    });

    it("Should return undefined for not existing test user", () => {
        testUserApiService.read("97fb3e17-75b2-4228-877a-fbb86b0148b7").subscribe(testUser => {
            expect(testUser).toBeUndefined();
        });
    });

    it("Should read all test users correctly", () => {
        testUserApiService.readAll().subscribe(testUsers => {
            expect(testUsers).toEqual([
                {
                    id: "98945f79-6293-4e98-8756-bc471d956fda",
                    firstName: "John",
                    lastName: "Smith"
                }
            ]);
        });
    });

    it("Should update the test user correctly", () => {
        combineLatest({
            testUser: testUserApiService.update({
                id: "98945f79-6293-4e98-8756-bc471d956fda",
                firstName: "James",
                lastName: "Smith"
            }),
            testUsers: testUserApiService.readAll()
        }).subscribe(({ testUser, testUsers }) => {
            expect(testUser).toEqual({
                id: "98945f79-6293-4e98-8756-bc471d956fda",
                firstName: "James",
                lastName: "Smith"
            });
            expect(testUsers).toEqual([
                {
                    id: "98945f79-6293-4e98-8756-bc471d956fda",
                    firstName: "James",
                    lastName: "Smith"
                }
            ]);
        });
    });

    it("Should delete the test user correctly", () => {
        combineLatest({
            testUser: testUserApiService.delete("98945f79-6293-4e98-8756-bc471d956fda"),
            testUsers: testUserApiService.readAll()
        }).subscribe(({ testUser, testUsers }) => {
            expect(testUser).toEqual({
                id: "98945f79-6293-4e98-8756-bc471d956fda",
                firstName: "John",
                lastName: "Smith"
            });
            expect(testUsers).toEqual([]);
        });
    });
});
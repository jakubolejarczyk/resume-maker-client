import { TestBed } from "@angular/core/testing";
import { Injectable } from "@angular/core";
import { combineLatest } from "rxjs";
import { Mocked } from "vitest";

import { BaseMockService } from "../../mock/service/base-mock.service";
import { BaseMockModel } from "../../mock/model/base-mock.model";
import { UUIDUtil } from "../../util/uuid.util";

interface TestUserModel extends BaseMockModel {
    firstName: string;
    lastName: string;
}

const johnSmith: TestUserModel = {
    id: "98945f79-6293-4e98-8756-bc471d956fda",
    firstName: "John",
    lastName: "Smith"
}

const jamesBrown: TestUserModel = {
    id: "a34d19c6-6cce-4887-a4dc-48d03b3134f5",
    firstName: "James",
    lastName: "Brown"
}

@Injectable()
class TestUserService extends BaseMockService<TestUserModel> {
    constructor() {
        super([johnSmith]);
    }
}

const uuidStrub: Mocked<UUIDUtil> = {
    generate: vi.fn()
};

describe("Base API Service", () => {
    let testUserService: TestUserService;

    beforeEach(() => {
        uuidStrub.generate.mockReturnValue(jamesBrown.id);
        TestBed.configureTestingModule({
            providers: [
                TestUserService,
                { provide: UUIDUtil, useValue: uuidStrub }
            ]
        });
        testUserService = TestBed.inject(TestUserService);
    });

    it("Should create the new test user correctly", () => {
        combineLatest({
            testUser: testUserService.create({ firstName: jamesBrown.firstName, lastName: jamesBrown.lastName }),
            testUsers: testUserService.readAll()
        }).subscribe(({ testUser, testUsers }) => {
            expect(testUser).toEqual(jamesBrown);
            expect(testUsers).toEqual([johnSmith, jamesBrown]);
        });
    });

    it("Should read the test user correctly", () => {
        testUserService.read("98945f79-6293-4e98-8756-bc471d956fda").subscribe(testUser => {
            expect(testUser).toEqual(johnSmith);
        });
    });

    it("Should return undefined for not existing test user", () => {
        testUserService.read("97fb3e17-75b2-4228-877a-fbb86b0148b7").subscribe(testUser => {
            expect(testUser).toBeUndefined();
        });
    });

    it("Should read all test users correctly", () => {
        testUserService.readAll().subscribe(testUsers => {
            expect(testUsers).toEqual([johnSmith]);
        });
    });

    it("Should update the test user correctly", () => {
        const jamesSmith: TestUserModel = { ...johnSmith, firstName: "James" };
        combineLatest({
            testUser: testUserService.update(jamesSmith),
            testUsers: testUserService.readAll()
        }).subscribe(({ testUser, testUsers }) => {
            expect(testUser).toEqual(jamesSmith);
            expect(testUsers).toEqual([jamesSmith]);
        });
    });

    it("Should delete the test user correctly", () => {
        combineLatest({
            testUser: testUserService.delete("98945f79-6293-4e98-8756-bc471d956fda"),
            testUsers: testUserService.readAll()
        }).subscribe(({ testUser, testUsers }) => {
            expect(testUser).toEqual(johnSmith);
            expect(testUsers).toEqual([]);
        });
    });
});
import { TestBed } from "@angular/core/testing";
import { provideStore, Store } from "@ngxs/store";

import { TestUserService } from "./test-user.service";
import { TestUserApiService, TestUserMockService } from "../api/service/base-api.service.spec";
import { TestUserStoreState } from "../store/state/test-user-store.state";

describe("Test User Service", () => {
    let testUserService: TestUserService;
    let store: Store;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                TestUserMockService,
                TestUserApiService,
                TestUserService,
                provideStore([TestUserStoreState])
            ]
        });
        testUserService = TestBed.inject(TestUserService);
        store = TestBed.inject(Store);
    });

    it("Should read the test user correctly", () => {
        testUserService.read("98945f79-6293-4e98-8756-bc471d956fda").subscribe(testUser => {
            const testUsers = store.selectSnapshot(TestUserStoreState.getTestUsers);
            expect(testUser).toEqual({
                id: "98945f79-6293-4e98-8756-bc471d956fda",
                firstName: "John",
                lastName: "Smith"
            });
            expect(testUsers).toEqual([
                {
                    id: "98945f79-6293-4e98-8756-bc471d956fda",
                    firstName: "John",
                    lastName: "Smith"
                }
            ]);
        });
    });

    it("Should return undefined for not existing test user", () => {
        testUserService.read("97fb3e17-75b2-4228-877a-fbb86b0148b7").subscribe(testUser => {
            const testUsers = store.selectSnapshot(TestUserStoreState.getTestUsers);
            expect(testUser).toBeUndefined();
            expect(testUsers).toEqual([
                {
                    id: "98945f79-6293-4e98-8756-bc471d956fda",
                    firstName: "John",
                    lastName: "Smith"
                }
            ]);
        });
    });

    it("Should read all test users correctly", () => {
        testUserService.readAll().subscribe(() => {
            const testUsers = store.selectSnapshot(TestUserStoreState.getTestUsers);
            expect(testUsers).toEqual([
                {
                    id: "98945f79-6293-4e98-8756-bc471d956fda",
                    firstName: "John",
                    lastName: "Smith"
                }
            ]);
        });
    });

    it("Should delete the test user correctly", () => {
        testUserService.delete("98945f79-6293-4e98-8756-bc471d956fda").subscribe(testUser => {
            const testUsers = store.selectSnapshot(TestUserStoreState.getTestUsers);
            expect(testUser).toEqual({
                id: "98945f79-6293-4e98-8756-bc471d956fda",
                firstName: "John",
                lastName: "Smith"
            });
            expect(testUsers).toEqual([]);
        });
    });
});
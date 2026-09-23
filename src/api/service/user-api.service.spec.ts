import { TestBed } from "@angular/core/testing";
import { combineLatest } from "rxjs";
import { Mocked } from "vitest";

import { UserApiService } from "./user-api.service";
import { UserApiModel } from "../model/user-api.model";
import { UUIDUtil } from "../../util/uuid.util";

const USER: UserApiModel = {
    id: "10229cd3-5321-4692-9996-6d14d01558aa",
    firstName: "Jakub",
    lastName: "Olejarczyk",
    jobTitle: "Senior Software Engineer",
    email: "jakub.olejarczyk@outlook.com",
    countryCode: "+48",
    phoneNumber: "501007197",
    city: "Kielce",
    country: "Poland",
    links: [
        "olejarczykjakub.com",
        "linkedin.com/in/jakub-olejarczyk",
        "github.com/jakubolejarczyk",
        "leetcode.com/u/JakubOlejarczyk"
    ],
    summary: "Senior Software Engineer with 6+ years of experience specializing in full-stack web development, with a strong focus on Angular on the frontend and ASP.NET on the backend. Experienced in designing and developing scalable web applications, RESTful APIs, and backend services, with a strong focus on clean architecture, performance, maintainability, and code quality. Proven ability to work across the full software development lifecycle and collaborate effectively with cross-functional teams to deliver reliable, high-quality solutions."
};

const NEW_USER: UserApiModel = {
    id: "fa7ae503-62f0-4e54-b5cb-16a137cbf905",
    firstName: "Jan",
    lastName: "Kowalski",
    jobTitle: "Front-end Developer",
    email: "jan.kowalski@gmail.com",
    countryCode: "+48",
    phoneNumber: "123456789",
    city: "Warsaw",
    country: "Poland",
    links: [
        "jankowalski.com",
        "linkedin.com/in/jan-kowalski",
        "github.com/jankowalski",
        "leetcode.com/u/JanKowalski"
    ],
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dapibus urna. Vivamus nec risus ex. Proin urna tellus, mattis sit amet sodales sit amet, pretium nec tellus. Suspendisse ipsum nisi, dictum nec efficitur ut, elementum eu est. Nam ultricies justo nec quam scelerisque, non suscipit massa bibendum. Fusce mauris risus, luctus vel dictum sed, pharetra commodo odio. Mauris accumsan et enim non rhoncus."
};

const uuidUtil: Mocked<UUIDUtil> = {
  generate: vi.fn(),
};

describe("User API Service", () => {
    let userApiService: UserApiService;
    
    beforeEach(() => {
        uuidUtil.generate.mockReturnValue("fa7ae503-62f0-4e54-b5cb-16a137cbf905");
        TestBed.configureTestingModule({
            providers: [
                { provide: UUIDUtil, useValue: uuidUtil }
            ],
        });
        userApiService = TestBed.inject(UserApiService);
    });

    it("Should create the user by the API correctly.", () => {
        combineLatest({
            user: userApiService.create(NEW_USER),
            users: userApiService.readAll()
        }).subscribe(({ user, users }) => {
            expect(user).toEqual(NEW_USER);
            expect(users).toEqual([USER, NEW_USER]);
        });
    });

    it("Should read the first user from the API correctly.", () => {
        userApiService.read("10229cd3-5321-4692-9996-6d14d01558aa").subscribe(user => {
            expect(user).toEqual(USER);
        });
    });

    it("Should read undefined if the user with given id does not exists.", () => {
        userApiService.read("18c09fe0-5d67-4b0a-bc1e-0c9d59c64402").subscribe(user => {
            expect(user).toEqual(undefined);
        });
    });

    it("Should read all users from the API correctly.", () => {
        userApiService.readAll().subscribe(users => {
            expect(users).toEqual([USER]);
        });
    });

    it("Should update the user from the API correctly.", () => {
        const UPDATED_USER = { ...USER, firstName: "Jan", lastName: "Kowalski" };
        combineLatest({
            user: userApiService.update(UPDATED_USER),
            users: userApiService.readAll()
        }).subscribe(({ user, users }) => {
            expect(user).toEqual(UPDATED_USER);
            expect(users).toEqual([UPDATED_USER]);
        });
    });

    it("Should delete the user from the API correctly.", () => {
        combineLatest({
            user: userApiService.delete("10229cd3-5321-4692-9996-6d14d01558aa"),
            users: userApiService.readAll()
        }).subscribe(({ user, users }) => {
            expect(user).toEqual(USER);
            expect(users).toEqual([]);
        });
    });
});
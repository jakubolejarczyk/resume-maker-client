import { TestBed } from "@angular/core/testing";

import { UserApiService } from "./user-api.service";
import { combineLatest } from "rxjs";

describe("User API Service", () => {
    let userApiService: UserApiService;
    
    beforeEach(() => {
        TestBed.configureTestingModule({});
        userApiService = TestBed.inject(UserApiService);
    });

    it("Should read the first user from the API correctly.", () => {
        userApiService.read("10229cd3-5321-4692-9996-6d14d01558aa").subscribe(user => {
            expect(user).toEqual({
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
            });
        });
    });

    it("Should read undefined if the user with given id does not exists.", () => {
        userApiService.read("18c09fe0-5d67-4b0a-bc1e-0c9d59c64402").subscribe(user => {
            expect(user).toEqual(undefined);
        });
    });

    it("Should read all users from the API correctly.", () => {
        userApiService.readAll().subscribe(users => {
            expect(users).toEqual([
                {
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
                }
            ]);
        });
    });

    it("Should delete the user from the API correctly.", () => {
        combineLatest({
            user: userApiService.delete("10229cd3-5321-4692-9996-6d14d01558aa"),
            users: userApiService.readAll()
        }).subscribe(({ user, users }) => {
            expect(user).toEqual({
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
            });
            expect(users).toEqual([]);
        });
    });
});
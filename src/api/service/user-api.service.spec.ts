import { TestBed } from "@angular/core/testing";

import { UserApiService } from "./user-api.service";
import { UserMockService } from "../../mock/service/user-mock.service";
import { switchMap } from "rxjs";

describe("User API Service", () => {
    let service: UserApiService;
    let s2: UserMockService;
    
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UserApiService);
        s2 = TestBed.inject(UserMockService);
    });

    it("test", () => {
        service.test().subscribe(i => {
            expect(i).toEqual([
                {
                    id: 0,
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

    it("test2", () => {
        service.test2().pipe(
            switchMap(() => s2.readAll())
        ).subscribe(i => {
            expect(i).toEqual([
                {
                    id: 0,
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
                },
                {
                    id: 1,
                    firstName: "a",
                    lastName: "b",
                    jobTitle: "c",
                    email: "d",
                    countryCode: "e",
                    phoneNumber: "f",
                    city: "g",
                    country: "h",
                    links: [],
                    summary: "i"
                }
            ]);
        });
    });
});
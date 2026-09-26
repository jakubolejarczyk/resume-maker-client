import { Injectable } from "@angular/core";

import { UserMockModel } from "../model/user-mock.model";
import { BaseMockService } from "./base-mock.service";

@Injectable({ providedIn: "root" })
export class UserMockService extends BaseMockService<UserMockModel> {
    constructor() {
        super([
            {
                id: "10229cd3-5321-4692-9996-6d14d01558aa",
                firstName: "Jakub",
                lastName: "Olejarczyk",
                jobTitle: "Senior Software Engineer",
                phoneNumber: "+48 501 007 197",
                email: "jakub.olejarczyk@outlook.com",
                city: "Kielce",
                country: "Poland",
                links: [
                    "olejarczykjakub.com",
                    "linkedin.com/in/jakub-olejarczyk",
                    "github.com/jakubolejarczyk",
                    "leetcode.com/u/JakubOlejarczyk"
                ],
                summary: "Senior Software Engineer with 6+ years of experience in full-stack web development, specializing in Angular on the frontend and ASP.NET on the backend. Experienced in designing and developing scalable web applications, RESTful APIs, and backend services, with a strong focus on clean architecture, performance, maintainability, and code quality. Proven ability to contribute across the full software development lifecycle and collaborate effectively with cross-functional teams to deliver scalable and maintainable solutions."
            }
        ]);
    }
}
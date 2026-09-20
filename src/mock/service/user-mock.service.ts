import { Injectable } from "@angular/core";

import { BaseMockService } from "./base-mock.service";
import { UserMockModel } from "../model/user-mock.model";

@Injectable({ providedIn: "root" })
export class UserMockService extends BaseMockService<UserMockModel> {
    constructor() {
        super([
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
                links: [],
                summary: "Senior Software Engineer with 6+ years of experience specializing in full-stack web development, with a strong focus on Angular on the frontend and ASP.NET on the backend. Experienced in designing and developing scalable web applications, RESTful APIs, and backend services, with a strong focus on clean architecture, performance, maintainability, and code quality. Proven ability to work across the full software development lifecycle and collaborate effectively with cross-functional teams to deliver reliable, high-quality solutions."
            }
        ]);
    }
}
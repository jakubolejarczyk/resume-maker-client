import { Injectable } from "@angular/core";
import { of } from "rxjs";

import { UserMockModel } from "../model/user-mock.model";

@Injectable({ providedIn: "root" })
export class UserMockService {
    private users: UserMockModel[] = [
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
    ];

    read(id: string) {
        return of(this.users.find(user => user.id === id));
    }

    readAll() {
        return of(this.users);
    }

    delete(id: string) {
        const userToDelete = this.users.find(user => user.id === id);
        this.users = this.users.filter(user => user.id !== id);
        return of(userToDelete);
    }
}
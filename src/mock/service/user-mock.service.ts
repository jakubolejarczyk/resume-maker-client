import { inject, Injectable } from "@angular/core";
import { of } from "rxjs";

import { UserMockModel } from "../model/user-mock.model";
import { UUIDUtil } from "../../util/uuid.util";

@Injectable({ providedIn: "root" })
export class UserMockService {
    private users: UserMockModel[] = [
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
    ];

    uuidUtil = inject(UUIDUtil);

    create(userToCreate: Omit<UserMockModel, "id">) {
        const newUser: UserMockModel = {
            ...userToCreate,
            id: this.uuidUtil.generate()
        };
        this.users.push(newUser);
        return of(newUser);
    }

    read(id: string) {
        return of(this.users.find(user => user.id === id));
    }

    readAll() {
        return of(this.users);
    }

    update(userToUpdate: UserMockModel) {
        this.users = this.users.map(user => user.id === userToUpdate.id ? userToUpdate : user);
        return of(userToUpdate);
    }

    delete(id: string) {
        const userToDelete = this.users.find(user => user.id === id);
        this.users = this.users.filter(user => user.id !== id);
        return of(userToDelete);
    }
}
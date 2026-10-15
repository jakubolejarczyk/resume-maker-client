import { UserDatabaseModel } from "../model/user-database.model";

export class UserDatabaseConst {
    static USER_PERSONAL_0: UserDatabaseModel = {
        id: 0,
        order: 0,
        isSelected: false,
        hasParent: false,
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
    };

    static USER_TEST_1: UserDatabaseModel = {
        id: 1,
        order: 1,
        isSelected: false,
        hasParent: false,
        firstName: "Anna",
        lastName: "Kowalska",
        jobTitle: "Full Stack Developer",
        phoneNumber: "+48 500 123 456",
        email: "anna.kowalska@example.com",
        city: "Krakow",
        country: "Poland",
        links: [
            "anna-kowalska.example.com",
            "linkedin.com/in/anna-kowalska",
            "github.com/anna-kowalska",
            "leetcode.com/u/AnnaKowalska"
        ],
        summary: "Full Stack Developer with 4+ years of experience building modern web applications using React on the frontend and Node.js on the backend. Experienced in developing RESTful APIs, integrating third-party services, and designing scalable database solutions. Strong focus on clean code, automated testing, performance optimization, and collaborative software development."
    };
}
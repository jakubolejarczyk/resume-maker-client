import { UserModel } from "../model/user.model";

export const usersMock: UserModel[] = [
    {
        id: 0,
        email: "jakub.olejarczyk@outlook.com",
        firstName: "Jakub",
        lastName: "Olejarczyk",
        city: "Kielce",
        country: "Poland",
        phoneNumber: "501007197"
    },
    {
        id: 1,
        email: "anna.kowalska@gmail.com",
        firstName: "Anna",
        lastName: "Kowalska",
        city: "Warsaw",
        country: "Poland",
        phoneNumber: "502123456"
    },
    {
        id: 2,
        email: "michael.smith@gmail.com",
        firstName: "Michael",
        lastName: "Smith",
        city: "London",
        country: "United Kingdom",
        phoneNumber: "7701234567"
    },
    {
        id: 3,
        email: "sophie.martin@yahoo.com",
        firstName: "Sophie",
        lastName: "Martin",
        city: "Paris",
        country: "France",
        phoneNumber: "612345678"
    },
    {
        id: 4,
        email: "daniel.mueller@web.de",
        firstName: "Daniel",
        lastName: "Müller",
        city: "Berlin",
        country: "Germany",
        phoneNumber: "15123456789"
    }
];
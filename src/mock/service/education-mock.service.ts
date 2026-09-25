import { inject, Injectable } from "@angular/core";
import { of } from "rxjs";

import { EducationMockModel } from "../model/education-mock.model";
import { UUIDUtil } from "../../util/uuid.util";

@Injectable({ providedIn: "root" })
export class EducationMockService {
    private educations: EducationMockModel[] = [
        {
            id: "36dfb15d-c304-4fff-88ea-10a30ce6f8b0",
            startYear: 2017,
            endYear: 2021,
            fieldOfStudy: "Computer Science",
            degree: "Bachelor of Engineering",
            institutionName: "Jan Kochanowski University of Kielce",
            userId: "10229cd3-5321-4692-9996-6d14d01558aa"
        },
        {
            id: "bf296c45-07b7-4396-8f2f-2df39ff5920a",
            startYear: 2024,
            endYear: 2026,
            fieldOfStudy: "Computer Science",
            degree: "Master of Science",
            institutionName: "Kielce University of Technology",
            userId: "10229cd3-5321-4692-9996-6d14d01558aa"
        }
    ];

    uuidUtil = inject(UUIDUtil);

    create(educationToCreate: Omit<EducationMockModel, "id">) {
        const newEducation: EducationMockModel = {
            ...educationToCreate,
            id: this.uuidUtil.generate()
        };
        this.educations.push(newEducation);
        return of(newEducation);
    }

    read(id: string) {
        return of(this.educations.find(education => education.id === id));
    }

    readAll() {
        return of(this.educations);
    }

    update(educationToUpdate: EducationMockModel) {
        this.educations = this.educations.map(education => education.id === educationToUpdate.id ? educationToUpdate : education);
        return of(educationToUpdate);
    }

    delete(id: string) {
        const educationToDelete = this.educations.find(education => education.id === id);
        this.educations = this.educations.filter(education => education.id !== id);
        return of(educationToDelete);
    }
}
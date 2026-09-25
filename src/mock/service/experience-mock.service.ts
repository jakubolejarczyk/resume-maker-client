import { inject, Injectable } from "@angular/core";
import { of } from "rxjs";

import { ExperienceMockModel } from "../model/experience-mock.model";
import { UUIDUtil } from "../../util/uuid.util";

@Injectable({ providedIn: "root" })
export class ExperienceMockService {
    private experiences: ExperienceMockModel[] = [
        {
            id: "b5aa0f18-56b5-44f6-bc8d-83fa86e69873",
            company: "APR System",
            startDate: "2020-07-01",
            endDate: "2025-02-01",
            jobTitle: "Software Engineer",
            description: [],
            userId: "10229cd3-5321-4692-9996-6d14d01558aa"
        },
        {
            id: "52da20ef-5813-4caf-af35-fb6239be0f0b",
            company: "Primaris",
            startDate: "2025-06-01",
            jobTitle: "Software Engineer",
            description: [],
            userId: "10229cd3-5321-4692-9996-6d14d01558aa"
        }
    ];

    uuidUtil = inject(UUIDUtil);

    create(experienceToCreate: Omit<ExperienceMockModel, "id">) {
        const newExperience: ExperienceMockModel = {
            ...experienceToCreate,
            id: this.uuidUtil.generate()
        };
        this.experiences.push(newExperience);
        return of(newExperience);
    }

    read(id: string) {
        return of(this.experiences.find(experience => experience.id === id));
    }

    readAll() {
        return of(this.experiences);
    }

    update(experienceToUpdate: ExperienceMockModel) {
        this.experiences = this.experiences.map(experience => experience.id === experienceToUpdate.id ? experienceToUpdate : experience);
        return of(experienceToUpdate);
    }

    delete(id: string) {
        const experienceToDelete = this.experiences.find(experience => experience.id === id);
        this.experiences = this.experiences.filter(experience => experience.id !== id);
        return of(experienceToDelete);
    }
}
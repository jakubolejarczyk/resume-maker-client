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
            description: [
                "Developed and maintained full-stack applications using Angular and ASP.NET, working across frontend components, business logic, backend services, REST APIs, and data integration.",
                "Designed and implemented a model-driven code generation platform that automatically generated frontend and backend structures from UML/domain models, reducing development time and allowing developers to focus on business logic.",
                "Developed internal npm tooling to standardize and streamline development workflows, improving team productivity and ensuring a consistent, well-structured process across the software delivery lifecycle.",
                "Created and maintained custom ESLint rules to automate adherence to company coding standards, reducing manual formatting effort and improving code consistency.",
                "Developed and maintained unit tests to verify application behavior, ensure code correctness, and improve overall software reliability."
            ],
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
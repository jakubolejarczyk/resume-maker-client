import { TestBed } from "@angular/core/testing";
import { combineLatest } from "rxjs";
import { Mocked } from "vitest";

import { ExperienceApiService } from "./experience-api.service";
import { ExperienceApiModel } from "../model/experience-api.model";
import { UUIDUtil } from "../../util/uuid.util";

const EXPERIENCE_APR: ExperienceApiModel = {
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
};

const EXPERIENCE_Primaris: ExperienceApiModel = {
    id: "52da20ef-5813-4caf-af35-fb6239be0f0b",
    company: "Primaris",
    startDate: "2025-06-01",
    jobTitle: "Software Engineer",
    description: [
        "Designed, developed, deployed, and maintained UiPath RPA solutions using .NET/C# to automate repetitive, time-consuming manual processes, reducing manual effort for non-technical employees and streamlining business workflows.",
        "Developed an internal C#/.NET library with custom UiPath activities that enabled seamless integration with KSeF 2.0, providing reusable components for implementing KSeF functionality across RPA workflows.",
        "Developed and maintained a UiPath automation for KSeF 2.0 that automated key KSeF operations, reducing time-consuming manual work and streamlining the company's invoicing processes.",
        "Integrated UiPath RPA solutions with external services through REST APIs and implemented data operations using Microsoft SQL Server, enabling automated communication and data processing across business systems.",
        "Collaborated directly with clients to analyze business processes, gather and clarify requirements, and identify automation opportunities, using the collected information to design effective RPA solutions."
    ],
    userId: "10229cd3-5321-4692-9996-6d14d01558aa"
};

const NEW_EXPERIENCE: ExperienceApiModel = {
    id: "fa7ae503-62f0-4e54-b5cb-16a137cbf905",
    company: "Google",
    startDate: "2021-06-01",
    endDate: "2023-09-01",
    jobTitle: "Software Engineer",
    description: [],
    userId: "10229cd3-5321-4692-9996-6d14d01558aa"
};

const uuidUtil: Mocked<UUIDUtil> = {
  generate: vi.fn(),
};

describe("Experience API Service", () => {
    let experienceApiService: ExperienceApiService;
    
    beforeEach(() => {
        uuidUtil.generate.mockReturnValue("fa7ae503-62f0-4e54-b5cb-16a137cbf905");
        TestBed.configureTestingModule({
            providers: [
                { provide: UUIDUtil, useValue: uuidUtil }
            ],
        });
        experienceApiService = TestBed.inject(ExperienceApiService);
    });

    it("Should create the experience by the API correctly.", () => {
        combineLatest({
            experience: experienceApiService.create(NEW_EXPERIENCE),
            experiences: experienceApiService.readAll()
        }).subscribe(({ experience, experiences }) => {
            expect(experience).toEqual(NEW_EXPERIENCE);
            expect(experiences).toEqual([EXPERIENCE_APR, EXPERIENCE_Primaris, NEW_EXPERIENCE]);
        });
    });

    it("Should read the first experiences from the API correctly.", () => {
        experienceApiService.read("b5aa0f18-56b5-44f6-bc8d-83fa86e69873").subscribe(experience => {
            expect(experience).toEqual(EXPERIENCE_APR);
        });
    });

    it("Should read undefined if the experience with given id does not exists.", () => {
        experienceApiService.read("18c09fe0-5d67-4b0a-bc1e-0c9d59c64402").subscribe(experience => {
            expect(experience).toEqual(undefined);
        });
    });

    it("Should read all experiences from the API correctly.", () => {
        experienceApiService.readAll().subscribe(experiences => {
            expect(experiences).toEqual([EXPERIENCE_APR, EXPERIENCE_Primaris]);
        });
    });

    it("Should update the experience from the API correctly.", () => {
        const UPDATED_EXPERIENCE = { ...EXPERIENCE_APR, company: "Abc" };
        combineLatest({
            experience: experienceApiService.update(UPDATED_EXPERIENCE),
            experiences: experienceApiService.readAll()
        }).subscribe(({ experience, experiences }) => {
            expect(experience).toEqual(UPDATED_EXPERIENCE);
            expect(experiences).toEqual([UPDATED_EXPERIENCE, EXPERIENCE_Primaris]);
        });
    });

    it("Should delete the expereince from the API correctly.", () => {
        combineLatest({
            experience: experienceApiService.delete("b5aa0f18-56b5-44f6-bc8d-83fa86e69873"),
            experiences: experienceApiService.readAll()
        }).subscribe(({ experience, experiences }) => {
            expect(experience).toEqual(EXPERIENCE_APR);
            expect(experiences).toEqual([EXPERIENCE_Primaris]);
        });
    });
});
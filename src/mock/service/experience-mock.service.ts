import { Injectable } from "@angular/core";

import { BaseMockService } from "./base-mock.service";
import { ExperienceMockModel } from "../model/experience-mock.model";

@Injectable({ providedIn: "root" })
export class ExperienceMockService extends BaseMockService<ExperienceMockModel> {
    constructor() {
        super([
            {
                id: 0,
                company: "APR System",
                startDate: "2020-07-01",
                endDate: "2025-02-01",
                jobTitle: "Software Engineer",
                description: [
                    "Developed and maintained full-stack applications using Angular and ASP.NET, working across frontend components, business logic, backend services, REST APIs, and data integration.",
                    "Created a model-driven code generation platform that processed UML/domain models through SQL-based data transformation into JSON definitions, which were then used by TypeScript to generate frontend and backend project structures.",
                    "Built internal npm tools to support and improve development workflows across the end-to-end product delivery process.",
                    "Created and maintained custom ESLint rules to improve code quality and consistency.",
                    "Wrote and maintained unit tests to ensure code correctness and reliability."
                ]
            },
            {
                id: 1,
                company: "Primaris",
                startDate: "2025-06-01",
                jobTitle: "RPA Software Engineer",
                description: [
                    "Designed, developed, deployed, and maintained UiPath RPA automations using .NET/C#.",
                    "Gathered business requirements and worked directly with clients to design automation solutions.",
                    "Developed a large-scale UiPath automation for KSeF 2.0 integration.",
                    "Built an internal C#/.NET library with custom UiPath activities for KSeF 2.0 integration.",
                    "Integrated RPA solutions with REST APIs and Microsoft SQL Server.",
                    "Provided production support and maintenance for deployed automations."
                ]
            }
        ]);
    }
}
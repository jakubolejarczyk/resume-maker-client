import { TestBed } from "@angular/core/testing";

import { ExperienceDatabaseService } from "./experience-database.service";
import * as util from "../util/database.util";
import { EXPERIENCE_0, EXPERIENCE_1 } from "../const/experience-database.const";
import { BaseDatabaseModel } from "../model/base/base-database.model";
import { ExperienceDataDatabaseModel } from "../model/data/experience-data-database.model";

describe("Experience Database Service", () => {
  let database: ExperienceDatabaseService;

  beforeEach(() => {
    database = TestBed.inject(ExperienceDatabaseService);
  });

  it(util.messageCreate("experience", 2), () => {
    const EXPERIENCE_2: BaseDatabaseModel<ExperienceDataDatabaseModel> = {
      data: {
        company: "TechNova Solutions",
        jobTitle: "Full Stack Developer",
        description: [
            "Developed and maintained web applications using React, TypeScript, and Node.js, building reusable UI components, backend services, and RESTful APIs.",
            "Designed and implemented scalable backend services and database integrations, improving application performance and ensuring reliable data processing.",
            "Built reusable frontend components and shared libraries to improve code maintainability, consistency, and development efficiency across multiple projects.",
            "Integrated third-party APIs and implemented automated workflows to streamline business processes and reduce manual work.",
            "Collaborated with designers, QA engineers, and developers to troubleshoot issues, review code, write unit tests, and deliver reliable software solutions."
        ],
        startDate: "2021-03-01",
        endDate: "2024-11-01",
      },
      metadata: {
        id: 2,
        parentId: 0,
        order: 2,
        isSelected: false
      }
    };
    util.testCreate(database, EXPERIENCE_2, [EXPERIENCE_0, EXPERIENCE_1, EXPERIENCE_2]); 
  });

  it(util.messageReadAll("experiences"), () => util.testReadAll(database, [EXPERIENCE_0, EXPERIENCE_1]));
  
  it(util.messageReadById("experience", 0), () => util.testReadById(database, 0, EXPERIENCE_0));
      
  it(util.messageReadByParentId("experiences", 0), () => util.testReadByParentId(database, 0, [EXPERIENCE_0, EXPERIENCE_1]));

  it(util.messageUpdate("experience", 0), () => {
    const EXPERIENCE_1_COPY = structuredClone(EXPERIENCE_1);
    EXPERIENCE_1_COPY.data.jobTitle = "Programmer";
    util.testUpdate(database, EXPERIENCE_1_COPY); 
  });

  it(util.messageDelete("experience", 1), () => util.testDelete(database, 1, [EXPERIENCE_0]));
});
import { TestBed } from "@angular/core/testing";

import { EducationDatabaseService } from "./education-database.service";
import * as util from "../util/database.util";
import { EDUCATION_0, EDUCATION_1 } from "../const/education-database.const";
import { BaseDatabaseModel } from "../model/base/base-database.model";
import { EducationDataDatabaseModel } from "../model/data/education-data-database.model";

describe("Education Database Service", () => {
  let service: EducationDatabaseService;

  beforeEach(() => {
    service = TestBed.inject(EducationDatabaseService);
  });

  it(util.messageCreate("education", 2), () => {
    const EDUCATION_2: BaseDatabaseModel<EducationDataDatabaseModel> = {
      data: {
        institutionName: "AGH University of Krakow",
        fieldOfStudy: "Software Engineering",
        degree: "Master of Science",
        startYear: 2023,
        endYear: 2025,
      },
      metadata: {
        id: 2,
        parentId: 0,
        order: 2,
        isSelected: false
      }
    };
    util.testCreate(service, EDUCATION_2, [EDUCATION_0, EDUCATION_1, EDUCATION_2]); 
  });

  it(util.messageReadAll("educations"), () => util.testReadAll(service, [EDUCATION_0, EDUCATION_1]));
    
  it(util.messageReadById("education", 1), () => util.testReadById(service, 1, EDUCATION_1));
        
  it(util.messageReadByParentId("education", 0), () => util.testReadByParentId(service, 0, [EDUCATION_0, EDUCATION_1]));

  it(util.messageUpdate("education", 0), () => {
    const EDUCATION_1_COPY = structuredClone(EDUCATION_1);
    EDUCATION_1_COPY.data.startYear = 2030;
    util.testUpdate(service, EDUCATION_1_COPY);
  });

  it(util.messageDelete("education", 0), () => util.testDelete(service, 0, [EDUCATION_1]));
});
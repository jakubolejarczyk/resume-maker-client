import { TestBed } from "@angular/core/testing";
import { combineLatest } from "rxjs";
import { Mocked } from "vitest";

import { EducationApiService } from "./education-api.service";
import { EducationApiModel } from "../model/education-api.model";
import { UUIDUtil } from "../../util/uuid.util";

const EDUCATION_UJK: EducationApiModel = {
    id: "36dfb15d-c304-4fff-88ea-10a30ce6f8b0",
    startYear: 2017,
    endYear: 2021,
    fieldOfStudy: "Computer Science",
    degree: "Bachelor of Engineering",
    institutionName: "Jan Kochanowski University of Kielce",
    userId: "10229cd3-5321-4692-9996-6d14d01558aa"
};

const EDUCATION_PSK: EducationApiModel = {
    id: "bf296c45-07b7-4396-8f2f-2df39ff5920a",
    startYear: 2024,
    endYear: 2026,
    fieldOfStudy: "Computer Science",
    degree: "Master of Science",
    institutionName: "Kielce University of Technology",
    userId: "10229cd3-5321-4692-9996-6d14d01558aa"
};

const NEW_EDUCATION: EducationApiModel = {
    id: "fa7ae503-62f0-4e54-b5cb-16a137cbf905",
    startYear: 2020,
    endYear: 2022,
    fieldOfStudy: "Computer Science",
    degree: "Master of Science",
    institutionName: "Warsaw University of Technology",
    userId: "10229cd3-5321-4692-9996-6d14d01558aa"
};

const uuidUtil: Mocked<UUIDUtil> = {
  generate: vi.fn(),
};

describe("Education API Service", () => {
    let educationApiService: EducationApiService;
    
    beforeEach(() => {
        uuidUtil.generate.mockReturnValue("fa7ae503-62f0-4e54-b5cb-16a137cbf905");
        TestBed.configureTestingModule({
            providers: [
                { provide: UUIDUtil, useValue: uuidUtil }
            ],
        });
        educationApiService = TestBed.inject(EducationApiService);
    });

    it("Should create the education by the API correctly.", () => {
        combineLatest({
            education: educationApiService.create(NEW_EDUCATION),
            educations: educationApiService.readAll()
        }).subscribe(({ education, educations }) => {
            expect(education).toEqual(NEW_EDUCATION);
            expect(educations).toEqual([EDUCATION_UJK, EDUCATION_PSK, NEW_EDUCATION]);
        });
    });

    it("Should read the first education from the API correctly.", () => {
        educationApiService.read("36dfb15d-c304-4fff-88ea-10a30ce6f8b0").subscribe(education => {
            expect(education).toEqual(EDUCATION_UJK);
        });
    });

    it("Should read undefined if the education with given id does not exists.", () => {
        educationApiService.read("18c09fe0-5d67-4b0a-bc1e-0c9d59c64402").subscribe(education => {
            expect(education).toEqual(undefined);
        });
    });

    it("Should read all educations from the API correctly.", () => {
        educationApiService.readAll().subscribe(educations => {
            expect(educations).toEqual([EDUCATION_UJK, EDUCATION_PSK]);
        });
    });

    it("Should update the education from the API correctly.", () => {
        const UPDATED_EDUCATION = { ...EDUCATION_UJK, startYear: 2000, endYear: 2005 };
        combineLatest({
            education: educationApiService.update(UPDATED_EDUCATION),
            educations: educationApiService.readAll()
        }).subscribe(({ education, educations }) => {
            expect(education).toEqual(UPDATED_EDUCATION);
            expect(educations).toEqual([UPDATED_EDUCATION, EDUCATION_PSK]);
        });
    });

    it("Should delete the education from the API correctly.", () => {
        combineLatest({
            user: educationApiService.delete("36dfb15d-c304-4fff-88ea-10a30ce6f8b0"),
            users: educationApiService.readAll()
        }).subscribe(({ user, users }) => {
            expect(user).toEqual(EDUCATION_UJK);
            expect(users).toEqual([EDUCATION_PSK]);
        });
    });
});
import { inject, Injectable } from "@angular/core";

import { EducationMockService } from "../../mock/service/education-mock.service";
import { EducationApiModel } from "../model/education-api.model";

@Injectable({ providedIn: "root" })
export class EducationApiService {
    educationMockService = inject(EducationMockService);

    create(educationToCreate: EducationApiModel) {
        return this.educationMockService.create(educationToCreate);
    }

    read(id: string) {
        return this.educationMockService.read(id);
    }

    readAll() {
        return this.educationMockService.readAll();
    }

    update(educationToUpdate: EducationApiModel) {
        return this.educationMockService.update(educationToUpdate);
    }

    delete(id: string) {
        return this.educationMockService.delete(id);
    }
}
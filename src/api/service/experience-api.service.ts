import { inject, Injectable } from "@angular/core";

import { ExperienceMockService } from "../../mock/service/experience-mock.service";
import { ExperienceApiModel } from "../model/experience-api.model";

@Injectable({ providedIn: "root" })
export class ExperienceApiService {
    experienceMockService = inject(ExperienceMockService);

    create(experienceToCreate: ExperienceApiModel) {
        return this.experienceMockService.create(experienceToCreate);
    }

    read(id: string) {
        return this.experienceMockService.read(id);
    }

    readAll() {
        return this.experienceMockService.readAll();
    }

    update(experienceToUpdate: ExperienceApiModel) {
        return this.experienceMockService.update(experienceToUpdate);
    }

    delete(id: string) {
        return this.experienceMockService.delete(id);
    }
}
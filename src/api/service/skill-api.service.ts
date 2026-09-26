import { inject, Injectable } from "@angular/core";

import { SkillMockService } from "../../mock/service/skill-mock.service";
import { SkillApiModel } from "../model/skill-api.model";

@Injectable({ providedIn: "root" })
export class SkillApiService {
    skillMockService = inject(SkillMockService);

    create(skillToCreate: SkillApiModel) {
        return this.skillMockService.create(skillToCreate);
    }

    read(id: string) {
        return this.skillMockService.read(id);
    }

    readAll() {
        return this.skillMockService.readAll();
    }

    update(skillToUpdate: SkillApiModel) {
        return this.skillMockService.update(skillToUpdate);
    }

    delete(id: string) {
        return this.skillMockService.delete(id);
    }
}
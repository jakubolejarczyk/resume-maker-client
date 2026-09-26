import { inject, Injectable } from "@angular/core";
import { of } from "rxjs";

import { SkillMockModel } from "../model/skill-mock.model";
import { UUIDUtil } from "../../util/uuid.util";

@Injectable({ providedIn: "root" })
export class SkillMockService {
    private skills: SkillMockModel[] = [
        {
            id: "abcd0574-a85e-4e7f-9d14-d4fc4067a027",
            category: "Frontend",
            skills: [
                "Angular"
            ],
            userId: "10229cd3-5321-4692-9996-6d14d01558aa"
        },
        {
            id: "dd15a80e-7ea6-43da-a027-da762387ea2f",
            category: "Languages",
            skills: [
                "English",
                "Polish"
            ],
            userId: "10229cd3-5321-4692-9996-6d14d01558aa"
        }
    ];

    uuidUtil = inject(UUIDUtil);

    create(skillToCreate: Omit<SkillMockModel, "id">) {
        const newSkill: SkillMockModel = {
            ...skillToCreate,
            id: this.uuidUtil.generate()
        };
        this.skills.push(newSkill);
        return of(newSkill);
    }

    read(id: string) {
        return of(this.skills.find(skill => skill.id === id));
    }

    readAll() {
        return of(this.skills);
    }

    update(skillToUpdate: SkillMockModel) {
        this.skills = this.skills.map(skill => skill.id === skillToUpdate.id ? skillToUpdate : skill);
        return of(skillToUpdate);
    }

    delete(id: string) {
        const skillToDelete = this.skills.find(skill => skill.id === id);
        this.skills = this.skills.filter(skill => skill.id !== id);
        return of(skillToDelete);
    }
}
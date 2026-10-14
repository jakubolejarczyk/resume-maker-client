import { inject, Injectable } from "@angular/core";
import { map, switchMap } from "rxjs";

import { BaseMockService } from "./base-mock.service";
import { ResumeStoreDatabaseMockAction } from "../database/store/action/resume-store-database-mock.action";
import { EducationMockService } from "./education-mock.service";
import { ExperienceMockService } from "./experience-mock.service";
import { SkillMockService } from "./skill-mock.service";
import { ResumeStoreDatabaseMockState } from "../database/store/state/resume-store-database-mock.state";
import { ResumeDatabaseMockModel } from "../database/model/resume-database-mock.model";

@Injectable({ providedIn: "root" })
export class ResumeMockService extends BaseMockService<ResumeDatabaseMockModel> {
    educationMockService = inject(EducationMockService);
    experienceMockService = inject(ExperienceMockService);
    skillMockService = inject(SkillMockService);

    constructor() {
        super(
            ResumeStoreDatabaseMockState.getItems,
            ResumeStoreDatabaseMockAction.DeleteByIds,
            ResumeStoreDatabaseMockAction.DeleteByParentIds
        );
    }

    override deleteByIds(ids: number[]) {
        return super.deleteByIds(ids).pipe(
            switchMap(() => this.educationMockService.deleteByParentIds(ids)),
            switchMap(() => this.experienceMockService.deleteByParentIds(ids)),
            switchMap(() => this.skillMockService.deleteByParentIds(ids))
        );
    }

    override deleteByParentIds(parentIds: number[]) {
        return this.store.selectOnce(this.baseGetItems).pipe(
            map((items) => items.filter(item => item.parentId !== undefined ? parentIds.includes(item.parentId) : true)),
            map((items) => items.map(item => item.id)),
            switchMap((ids) => this.educationMockService.deleteByParentIds(ids).pipe(map(() => ids))),
            switchMap((ids) => this.experienceMockService.deleteByParentIds(ids).pipe(map(() => ids))),
            switchMap((ids) => this.skillMockService.deleteByParentIds(ids)),
            switchMap(() => super.deleteByParentIds(parentIds))
        );
    }
}
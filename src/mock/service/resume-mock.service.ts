import { inject, Injectable } from "@angular/core";
import { switchMap } from "rxjs";

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

    override delete(ids: number[]) {
        return super.delete(ids).pipe(
            switchMap(() => this.store.dispatch(new this.educationMockService.baseDeleteByParentIds(ids))),
            switchMap(() => this.store.dispatch(new this.experienceMockService.baseDeleteByParentIds(ids))),
            switchMap(() => this.store.dispatch(new this.skillMockService.baseDeleteByParentIds(ids)))
        );
    }
}
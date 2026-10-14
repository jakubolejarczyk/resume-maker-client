import { Injectable } from "@angular/core";
import { switchMap } from "rxjs";

import { BaseMockService } from "./base-mock.service";
import { ResumeStoreDatabaseMockAction } from "../database/store/action/resume-store-database-mock.action";
import { SkillStoreDatabaseMockAction } from "../database/store/action/skill-store-database-mock.action";
import { ExperienceStoreDatabaseMockAction } from "../database/store/action/experience-store-database-mock.action";
import { EducationStoreDatabaseMockAction } from "../database/store/action/education-store-database-mock.action";

@Injectable({ providedIn: "root" })
export class ResumeMockService extends BaseMockService {
    delete(ids: number[]) {
        return this.store.dispatch(new EducationStoreDatabaseMockAction.DeleteByResumeIds(ids)).pipe(
            switchMap(() => this.store.dispatch(new ExperienceStoreDatabaseMockAction.DeleteByResumeIds(ids))),
            switchMap(() => this.store.dispatch(new SkillStoreDatabaseMockAction.DeleteByResumeIds(ids))),
            switchMap(() => this.store.dispatch(new ResumeStoreDatabaseMockAction.DeleteByIds(ids)))
        );
    }
}
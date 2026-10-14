import { Injectable } from "@angular/core";
import { map, of, switchMap } from "rxjs";

import { BaseMockService } from "./base-mock.service";
import { UserStoreDatabaseMockAction } from "../database/store/action/user-store-database-mock.action";
import { ResumeStoreDatabaseMockAction } from "../database/store/action/resume-store-database-mock.action";
import { ResumeStoreDatabaseMockState } from "../database/store/state/resume-store-database-mock.state";
import { EducationStoreDatabaseMockAction } from "../database/store/action/education-store-database-mock.action";
import { ExperienceStoreDatabaseMockAction } from "../database/store/action/experience-store-database-mock.action";
import { SkillStoreDatabaseMockAction } from "../database/store/action/skill-store-database-mock.action";

@Injectable({ providedIn: "root" })
export class UserMockService extends BaseMockService {
    delete(ids: number[]) {
        return of(this.store.selectSnapshot(ResumeStoreDatabaseMockState.getResumesByUserIds(ids))).pipe(
            map((resumes) => resumes.map(resume => resume.id)),
            switchMap((resumeIds) => this.store.dispatch(new EducationStoreDatabaseMockAction.DeleteByResumeIds(resumeIds)).pipe(
                map(() => resumeIds)
            )),
            switchMap((resumeIds) => this.store.dispatch(new ExperienceStoreDatabaseMockAction.DeleteByResumeIds(resumeIds)).pipe(
                map(() => resumeIds)
            )),
            switchMap((resumeIds) => this.store.dispatch(new SkillStoreDatabaseMockAction.DeleteByResumeIds(resumeIds)).pipe(
                map(() => resumeIds)
            )),
            switchMap((resumeIds) => this.store.dispatch(new ResumeStoreDatabaseMockAction.DeleteByIds(resumeIds))),
            switchMap(() => this.store.dispatch(new UserStoreDatabaseMockAction.DeleteByIds(ids))),
        );
    }
}
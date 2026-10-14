export namespace ExperienceStoreDatabaseMockAction {
    const ACTION_TYPE = "[ExperienceStoreDatabaseMockAction]";

    export class DeleteByIds {
        static readonly type = `${ACTION_TYPE} DeleteByIds`;

        constructor(public ids: number[]) {}
    }

    export class DeleteByResumeIds {
        static readonly type = `${ACTION_TYPE} DeleteByResumeIds`;

        constructor(public resumeIds: number[]) {}
    }
}
export namespace ResumeStoreDatabaseMockAction {
    const ACTION_TYPE = "[ResumeStoreDatabaseMockAction]";

    export class DeleteByIds {
        static readonly type = `${ACTION_TYPE} DeleteByIds`;

        constructor(public ids: number[]) {}
    }

    export class DeleteByUserIds {
        static readonly type = `${ACTION_TYPE} DeleteByUserIds`;

        constructor(public userIds: number[]) {}
    }
}
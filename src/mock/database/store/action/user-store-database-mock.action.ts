export namespace UserStoreDatabaseMockAction {
    const ACTION_TYPE = "[UserStoreDatabaseMockAction]";

    export class DeleteByIds {
        static readonly type = `${ACTION_TYPE} DeleteByIds`;

        constructor(public ids: number[]) {}
    }
}
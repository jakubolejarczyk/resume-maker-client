export namespace ResumeStoreDatabaseMockAction {
    const ACTION_TYPE = "[ResumeStoreDatabaseMockAction]";

    export class Delete {
        static readonly type = `${ACTION_TYPE} Delete`;

        constructor(public id: number) {}
    }
}
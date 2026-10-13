export namespace UserStoreDatabaseMockAction {
    const ACTION_TYPE = "[UserStoreDatabaseMockAction]";

    export class Delete {
        static readonly type = `${ACTION_TYPE} Delete`;

        constructor(public id: number) {}
    }
}
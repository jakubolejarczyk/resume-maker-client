export namespace EducationStoreDatabaseMockAction {
    const ACTION_TYPE = "[EducationStoreDatabaseMockAction]";

    export class Delete {
        static readonly type = `${ACTION_TYPE} Delete`;

        constructor(public id: number) {}
    }
}
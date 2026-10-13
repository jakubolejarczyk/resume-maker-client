export namespace ExperienceStoreDatabaseMockAction {
    const ACTION_TYPE = "[ExperienceStoreDatabaseMockAction]";

    export class Delete {
        static readonly type = `${ACTION_TYPE} Delete`;

        constructor(public id: number) {}
    }
}
export namespace SkillStoreDatabaseMockAction {
    const ACTION_TYPE = "[SkillStoreDatabaseMockAction]";

    export class Delete {
        static readonly type = `${ACTION_TYPE} Delete`;

        constructor(public id: number) {}
    }
}
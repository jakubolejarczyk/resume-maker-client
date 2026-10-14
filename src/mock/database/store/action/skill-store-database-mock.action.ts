import { BaseStoreDatabaseMockAction } from "./base-store-database-mock.action";

export namespace SkillStoreDatabaseMockAction {
    const ACTION_TYPE = "SkillStoreDatabaseMockAction";

    export class DeleteByIds extends BaseStoreDatabaseMockAction.DeleteByIds {
        static readonly type = BaseStoreDatabaseMockAction.DeleteByIds.buildActionType(ACTION_TYPE);
    }

    export class DeleteByParentIds extends BaseStoreDatabaseMockAction.DeleteByParentIds {
        static readonly type = BaseStoreDatabaseMockAction.DeleteByParentIds.buildActionType(ACTION_TYPE);
    }
}
import { BaseStoreDatabaseMockAction } from "./base-store-database-mock.action";

export namespace UserStoreDatabaseMockAction {
    const ACTION_TYPE = "UserStoreDatabaseMockAction";

    export class DeleteByIds extends BaseStoreDatabaseMockAction.DeleteByIds {
        static readonly type = BaseStoreDatabaseMockAction.DeleteByIds.buildActionType(ACTION_TYPE);
    }

    export class DeleteByParentIds extends BaseStoreDatabaseMockAction.DeleteByParentIds {
        static readonly type = BaseStoreDatabaseMockAction.DeleteByParentIds.buildActionType(ACTION_TYPE);
    }
}
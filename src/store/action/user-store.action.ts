import { UserApiModel } from "../../api/model/user-api.model";
import { BaseStoreAction } from "./base-store.action";

export namespace UserStoreAction {
    const ACTION_TYPE = "[UserStoreState]";

    export class SetStatus extends BaseStoreAction.SetStatus {
        static readonly type = `${ACTION_TYPE} SetStatus`;
    }

    export class SetIsLoading extends BaseStoreAction.SetIsLoading {
        static readonly type = `${ACTION_TYPE} SetIsLoading`;
    }

    export class SetItems extends BaseStoreAction.SetItems<UserApiModel> {
        static readonly type = `${ACTION_TYPE} SetItems`;
    }

    export class AddItem extends BaseStoreAction.AddItem<UserApiModel> {
        static readonly type = `${ACTION_TYPE} AddItem`;
    }

    export class UpdateItem extends BaseStoreAction.UpdateItem<UserApiModel> {
        static readonly type = `${ACTION_TYPE} UpdateItem`;
    }

    export class DeleteItem extends BaseStoreAction.DeleteItem {
        static readonly type = `${ACTION_TYPE} DeleteItem`;
    }

    export class SetSelectedItem extends BaseStoreAction.SetSelectedItem<UserApiModel> {
        static readonly type = `${ACTION_TYPE} SetSelectedItem`;
    }
}
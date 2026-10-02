import { EducationApiModel } from "../../api/model/education-api.model";
import { BaseStoreAction } from "./base-store.action";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace EducationStoreAction {
    const ACTION_TYPE = "[EducationStoreState]";

    export class SetStatus extends BaseStoreAction.SetStatus {
        static readonly type = `${ACTION_TYPE} SetStatus`;
    }

    export class SetIsLoading extends BaseStoreAction.SetIsLoading {
        static readonly type = `${ACTION_TYPE} SetIsLoading`;
    }

    export class SetItems extends BaseStoreAction.SetItems<EducationApiModel> {
        static readonly type = `${ACTION_TYPE} SetItems`;
    }

    export class AddItem extends BaseStoreAction.AddItem<EducationApiModel> {
        static readonly type = `${ACTION_TYPE} AddItem`;
    }

    export class UpdateItem extends BaseStoreAction.UpdateItem<EducationApiModel> {
        static readonly type = `${ACTION_TYPE} UpdateItem`;
    }

    export class DeleteItem extends BaseStoreAction.DeleteItem {
        static readonly type = `${ACTION_TYPE} DeleteItem`;
    }

    export class SetSelectedItem extends BaseStoreAction.SetSelectedItem<EducationApiModel> {
        static readonly type = `${ACTION_TYPE} SetSelectedItem`;
    }
}
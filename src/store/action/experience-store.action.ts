import { ExperienceApiModel } from "../../api/model/experience-api.model";
import { BaseStoreAction } from "./base-store.action";

export namespace ExperienceStoreAction {
    const ACTION_TYPE = "[ExperienceStoreState]";

    export class SetStatus extends BaseStoreAction.SetStatus {
        static readonly type = `${ACTION_TYPE} SetStatus`;
    }

    export class SetIsLoading extends BaseStoreAction.SetIsLoading {
        static readonly type = `${ACTION_TYPE} SetIsLoading`;
    }

    export class SetItems extends BaseStoreAction.SetItems<ExperienceApiModel> {
        static readonly type = `${ACTION_TYPE} SetItems`;
    }

    export class AddItem extends BaseStoreAction.AddItem<ExperienceApiModel> {
        static readonly type = `${ACTION_TYPE} AddItem`;
    }

    export class UpdateItem extends BaseStoreAction.UpdateItem<ExperienceApiModel> {
        static readonly type = `${ACTION_TYPE} UpdateItem`;
    }

    export class DeleteItem extends BaseStoreAction.DeleteItem {
        static readonly type = `${ACTION_TYPE} DeleteItem`;
    }

    export class SetSelectedItem extends BaseStoreAction.SetSelectedItem<ExperienceApiModel> {
        static readonly type = `${ACTION_TYPE} SetSelectedItem`;
    }
}
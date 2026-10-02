import { SkillApiModel } from "../../api/model/skill-api.model";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace SkillStoreAction {
    const ACTION_TYPE = "[SkillStoreState]";

    export class SetStatus {
        static readonly type = `${ACTION_TYPE} SetStatus`;

        constructor(public success: boolean, public message: string) {}
    }

    export class SetIsLoading {
        static readonly type = `${ACTION_TYPE} SetIsLoading`;

        constructor(public isLoading: boolean) {}
    }

    export class SetItems {
        static readonly type = `${ACTION_TYPE} SetItems`;

        constructor(public items: SkillApiModel[]) {}
    }

    export class AddItem {
        static readonly type = `${ACTION_TYPE} AddItem`;

        constructor(public item: SkillApiModel) {}
    }

    export class UpdateItem {
        static readonly type = `${ACTION_TYPE} UpdateItem`;

        constructor(public item: SkillApiModel) {}
    }

    export class DeleteItem {
        static readonly type = `${ACTION_TYPE} DeleteItem`;

        constructor(public id: number) {}
    }

    export class SetSelectedItem {
        static readonly type = `${ACTION_TYPE} SetSelectedItem`;

        constructor(public selectedItem: SkillApiModel | undefined) {}
    }
}
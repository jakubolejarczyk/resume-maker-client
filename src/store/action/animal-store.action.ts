import { AnimalApiModel } from "../../api/service/base-api.service.spec";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace AnimalStoreAction {
    export class SetLoading {
        static readonly type = "[AnimalStoreState] SetLoading";

        constructor(public isLoading: boolean) {}
    }

    export class SetStatus {
        static readonly type = "[AnimalStoreState] SetStatus";

        constructor(public success: boolean, public message: string) {}
    }

    export class AddItem {
        static readonly type = "[AnimalStoreState] AddItem";

        constructor(public item: AnimalApiModel) {}
    }
}
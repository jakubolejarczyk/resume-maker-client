// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace BaseStoreAction {
    export class SetStatus {
        constructor(public success: boolean, public message: string) {}
    }

    export class SetIsLoading {
        constructor(public isLoading: boolean) {}
    }

    export class SetItems<TModel> {
        constructor(public items: TModel[]) {}
    }

    export class AddItem<TModel> {
        constructor(public item: TModel) {}
    }

    export class UpdateItem<TModel> {
        constructor(public item: TModel) {}
    }

    export class DeleteItem {
        constructor(public id: number) {}
    }

    export class SetSelectedItem<TModel> {
        constructor(public selectedItem: TModel | undefined) {}
    }
}
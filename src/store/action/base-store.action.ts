import { BaseDatabaseModel } from '../../database/model/base/base-database.model';

export namespace BaseStoreAction {
  export class SetStatus {
    constructor(
      public success: boolean,
      public message: string,
    ) {}

    protected static BuildActionType = (actionType: string) =>
      `${actionType} SetStatus`;
  }

  export class SetIsLoading {
    constructor(public isLoading: boolean) {}

    protected static BuildActionType = (actionType: string) =>
      `${actionType} SetIsLoading`;
  }

  export class SetItems<TItem> {
    constructor(public items: BaseDatabaseModel<TItem>[]) {}

    protected static BuildActionType = (actionType: string) =>
      `${actionType} SetItems`;
  }

  export class SetSelectedItem<TItem> {
    constructor(public selectedItem: TItem | undefined) {}

    protected static BuildActionType = (actionType: string) =>
      `${actionType} SetSelectedItem`;
  }
}

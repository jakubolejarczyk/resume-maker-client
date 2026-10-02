import { Action, provideStore, Selector, State, StateContext, Store } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { switchMap, tap } from "rxjs";

import { BaseStoreAction } from "../action/base-store.action";
import { AnimalApiModel } from "../../api/service/base-api.service.spec";
import { BaseStoreModel } from "../model/base-store.model";
import { BaseStoreState } from "./base-store.state";
import { BaseApiModel } from "../../api/model/base-api.model";

type AnimalStoreModel = BaseStoreModel<AnimalApiModel>;

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace AnimalStoreAction {
    const ACTION_TYPE = "[AnimalStoreState]";

    export class SetStatus extends BaseStoreAction.SetStatus {
        static readonly type = `${ACTION_TYPE} SetStatus`;
    }

    export class SetIsLoading extends BaseStoreAction.SetIsLoading {
        static readonly type = `${ACTION_TYPE} SetIsLoading`;
    }

    export class SetItems extends BaseStoreAction.SetItems<AnimalApiModel> {
        static readonly type = `${ACTION_TYPE} SetItems`;
    }

    export class AddItem extends BaseStoreAction.AddItem<AnimalApiModel> {
        static readonly type = `${ACTION_TYPE} AddItem`;
    }

    export class UpdateItem extends BaseStoreAction.UpdateItem<AnimalApiModel> {
        static readonly type = `${ACTION_TYPE} UpdateItem`;
    }

    export class DeleteItem extends BaseStoreAction.DeleteItem {
        static readonly type = `${ACTION_TYPE} DeleteItem`;
    }

    export class SetSelectedItem extends BaseStoreAction.SetSelectedItem<AnimalApiModel> {
        static readonly type = `${ACTION_TYPE} SetSelectedItem`;
    }
}

@State<AnimalStoreModel>({
  name: "animalStoreState",
  defaults: {
    success: true,
    message: "",
    isLoading: false,
    items: [
      { id: 0, name: "dog" },
      { id: 1, name: "cat" }
    ],
    selectedItem: undefined
  }
})
@Injectable()
export class AnimalStoreState extends BaseStoreState<AnimalApiModel> {
  @Selector()
  static override getStatus<TModel extends BaseApiModel>(state: BaseStoreModel<TModel>) {
    return super.getStatus(state);
  }

  @Selector()
  static override getIsLoading<TModel extends BaseApiModel>(state: BaseStoreModel<TModel>) {
    return super.getIsLoading(state);
  }

  @Selector()
  static override getItems<TModel extends BaseApiModel>(state: BaseStoreModel<TModel>) {
    return super.getItems(state);
  }

  @Selector()
  static override getSelectedItem<TModel extends BaseApiModel>(state: BaseStoreModel<TModel>) {
    return super.getSelectedItem(state);
  }

  @Action(AnimalStoreAction.SetStatus)
  override setStatus(ctx: StateContext<AnimalStoreModel>, action: AnimalStoreAction.SetStatus) {
    super.setStatus(ctx, action);
  }

  @Action(AnimalStoreAction.SetIsLoading)
  override setIsLoading(ctx: StateContext<AnimalStoreModel>, action: AnimalStoreAction.SetIsLoading) {
    super.setIsLoading(ctx, action);
  }

  @Action(AnimalStoreAction.SetItems)
  override setItems(ctx: StateContext<AnimalStoreModel>, action: AnimalStoreAction.SetItems) {
    super.setItems(ctx, action);
  }

  @Action(AnimalStoreAction.AddItem)
  override addItem(ctx: StateContext<AnimalStoreModel>, action: AnimalStoreAction.AddItem) {
    super.addItem(ctx, action);
  }

  @Action(AnimalStoreAction.UpdateItem)
  override updateItem(ctx: StateContext<AnimalStoreModel>, action: AnimalStoreAction.UpdateItem) {
    super.updateItem(ctx, action);
  }

  @Action(AnimalStoreAction.DeleteItem)
  override deleteItem(ctx: StateContext<AnimalStoreModel>, action: AnimalStoreAction.DeleteItem) {
    super.deleteItem(ctx, action);
  }

  @Action(AnimalStoreAction.SetSelectedItem)
  override selectedItem(ctx: StateContext<AnimalStoreModel>, action: AnimalStoreAction.SetSelectedItem) {
    super.selectedItem(ctx, action);
  }
}

export const STORE_PROVIDERS = [AnimalStoreState, provideStore([AnimalStoreState])];

describe("Store", () => {
    let store: Store;

    beforeEach(() => {
      TestBed.configureTestingModule({ providers: STORE_PROVIDERS });
      store = TestBed.inject(Store);
    });

    it("Should select the value of the status from the store.", () => {
      const status = store.selectSnapshot(AnimalStoreState.getStatus);
      expect(status).toEqual({
        success: true,
        message: ""
      });
    });

    it("Should select the value of the is loading from the store.", () => {
      const isLoading = store.selectSnapshot(AnimalStoreState.getIsLoading);
      expect(isLoading).toBeFalsy();
    });

    it("Should select the value of the items from the store.", () => {
      const items = store.selectSnapshot(AnimalStoreState.getItems);
      expect(items).toEqual([
        { id: 0, name: "dog" },
        { id: 1, name: "cat" }
      ]);
    });

    it("Should select the value of the selected item from the store.", () => {
      const selectedItem = store.selectSnapshot(AnimalStoreState.getSelectedItem);
      expect(selectedItem).toBeUndefined();
    });

    it("Should correctry set the status in the store.", () => {
      store.dispatch(new AnimalStoreAction.SetStatus(true, "The animals were fetched correctly.")).pipe(
        switchMap(() => store.selectOnce(AnimalStoreState.getStatus)),
        tap(status => expect(status).toEqual({ success: true, message: "The animals were fetched correctly." }))
      ).subscribe();
    });

    it("Should correctry set the is loading in the store.", () => {
      store.dispatch(new AnimalStoreAction.SetIsLoading(true)).pipe(
        switchMap(() => store.selectOnce(AnimalStoreState.getIsLoading)),
        tap(isLoading => expect(isLoading).toBeTruthy())
      ).subscribe();
    });

    it("Should correctry set the items in the store.", () => {
      store.dispatch(new AnimalStoreAction.SetItems([
        { id: 0, name: "bird" },
        { id: 1, name: "rabbit" }
      ])).pipe(
        switchMap(() => store.selectOnce(AnimalStoreState.getItems)),
        tap(items => expect(items).toEqual([
          { id: 0, name: "bird" },
          { id: 1, name: "rabbit" }
        ]))
      ).subscribe();
    });

    it("Should correctry add the item to the store if not exists.", () => {
      store.dispatch(new AnimalStoreAction.AddItem({ id: 2, name: "rabbit" })).pipe(
        switchMap(() => store.selectOnce(AnimalStoreState.getItems)),
        tap(items => expect(items).toEqual([
          { id: 0, name: "dog" },
          { id: 1, name: "cat" },
          { id: 2, name: "rabbit" }
        ]))
      ).subscribe();
    });

    it("Should correctry skip adding the item to the store if already exists.", () => {
      store.dispatch(new AnimalStoreAction.AddItem({ id: 0, name: "dog" })).pipe(
        switchMap(() => store.selectOnce(AnimalStoreState.getItems)),
        tap(items => expect(items).toEqual([
          { id: 0, name: "dog" },
          { id: 1, name: "cat" }
        ]))
      ).subscribe();
    });

    it("Should correctry update the item in the store if exists.", () => {
      store.dispatch(new AnimalStoreAction.UpdateItem({ id: 0, name: "rabbit" })).pipe(
        switchMap(() => store.selectOnce(AnimalStoreState.getItems)),
        tap(items => expect(items).toEqual([
          { id: 0, name: "rabbit" },
          { id: 1, name: "cat" }
        ]))
      ).subscribe();
    });

    it("Should correctry skip updating the item in the store if not exists.", () => {
      store.dispatch(new AnimalStoreAction.UpdateItem({ id: 2, name: "rabbit" })).pipe(
        switchMap(() => store.selectOnce(AnimalStoreState.getItems)),
        tap(items => expect(items).toEqual([
          { id: 0, name: "dog" },
          { id: 1, name: "cat" }
        ]))
      ).subscribe();
    });

    it("Should correctry delete the item in the store if exists.", () => {
      store.dispatch(new AnimalStoreAction.DeleteItem(0)).pipe(
        switchMap(() => store.selectOnce(AnimalStoreState.getItems)),
        tap(items => expect(items).toEqual([
          { id: 1, name: "cat" }
        ]))
      ).subscribe();
    });

    it("Should correctry skip deleting the item in the store if not exists.", () => {
      store.dispatch(new AnimalStoreAction.DeleteItem(2)).pipe(
        switchMap(() => store.selectOnce(AnimalStoreState.getItems)),
        tap(items => expect(items).toEqual([
          { id: 0, name: "dog" },
          { id: 1, name: "cat" }
        ]))
      ).subscribe();
    });

    it("Should correctry select the item in the store.", () => {
      store.dispatch(new AnimalStoreAction.SetSelectedItem({ id: 0, name: "dog" })).pipe(
        switchMap(() => store.selectOnce(AnimalStoreState.getSelectedItem)),
        tap(selectedItem => expect(selectedItem).toEqual({ id: 0, name: "dog" }))
      ).subscribe();
    });
});
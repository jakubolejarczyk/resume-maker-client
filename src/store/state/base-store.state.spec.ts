import { Action, provideStore, Selector, State, StateContext, Store } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { switchMap, tap } from "rxjs";

import { BaseStoreAction } from "../action/base-store.action";
import { AnimalApiModel } from "../../api/service/base-api.service.spec";
import { BaseStoreModel } from "../model/base-store.model";

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
class AnimalStoreState {
  @Selector()
  static getStatus(state: AnimalStoreModel) {
    return {
      success: state.success,
      message: state.message
    };
  }
  
  @Selector()
  static getIsLoading(state: AnimalStoreModel) {
    return state.isLoading;
  }

  @Selector()
  static getItems(state: AnimalStoreModel) {
    return state.items;
  }
  
  @Selector()
  static getSelectedItem(state: AnimalStoreModel) {
    return state.selectedItem;
  }

  @Action(AnimalStoreAction.SetStatus)
  setStatus(ctx: StateContext<AnimalStoreModel>, action: AnimalStoreAction.SetStatus) {
    const state = ctx.getState();
    ctx.setState({ ...state, success: action.success, message: action.message });
  }

  @Action(AnimalStoreAction.SetIsLoading)
  setIsLoading(ctx: StateContext<AnimalStoreModel>, action: AnimalStoreAction.SetIsLoading) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      isLoading: action.isLoading
    });
  }

  @Action(AnimalStoreAction.SetItems)
  setItems(ctx: StateContext<AnimalStoreModel>, action: AnimalStoreAction.SetItems) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: action.items
    });
  }

  @Action(AnimalStoreAction.AddItem)
  addItem(ctx: StateContext<AnimalStoreModel>, action: AnimalStoreAction.AddItem) {
    const state = ctx.getState();
    const actionItemExistsInState = state.items.find(item => item.id === action.item.id);
    if (actionItemExistsInState) return;
    ctx.setState({
      ...state,
      items: [...state.items, action.item]
    });
  }

  @Action(AnimalStoreAction.UpdateItem)
  updateItem(ctx: StateContext<AnimalStoreModel>, action: AnimalStoreAction.UpdateItem) {
    const state = ctx.getState();
    const actionItemNotExistInState = !state.items.find(item => item.id === action.item.id);
    if (actionItemNotExistInState) return;
    ctx.setState({
      ...state,
      items: state.items.map(item => item.id === action.item.id ? action.item : item)
    });
  }

  @Action(AnimalStoreAction.DeleteItem)
  deleteItem(ctx: StateContext<AnimalStoreModel>, action: AnimalStoreAction.DeleteItem) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: state.items.filter(item => item.id !== action.id)
    });
  }

  @Action(AnimalStoreAction.SetSelectedItem)
  selectedItem(ctx: StateContext<AnimalStoreModel>, action: AnimalStoreAction.SetSelectedItem) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      selectedItem: action.selectedItem
    });
  }
}

describe("Store", () => {
    let store: Store;

    beforeEach(() => {
      TestBed.configureTestingModule({
          providers: [
            AnimalStoreState,
            provideStore([AnimalStoreState])
          ]
      });
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
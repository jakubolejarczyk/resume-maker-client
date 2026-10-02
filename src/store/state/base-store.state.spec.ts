import { Action, provideStore, Selector, State, StateContext, Store } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { TestBed } from "@angular/core/testing";

import { AnimalApiModel } from "../../api/service/base-api.service.spec";
import { BaseStoreModel } from "../model/base-store.model";
import { switchMap, tap } from "rxjs";

type AnimalStoreModel = BaseStoreModel<AnimalApiModel>;

const ACTION_TYPE = "[AnimalStoreAction]";

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace AnimalStoreAction {
  export class SetStatus {
    static readonly type = `${ACTION_TYPE} SetStatus`;

    constructor(public success: boolean, public message: string) {}
  }

  export class SetIsLoading {
    static readonly type = `${ACTION_TYPE} SetIsLoading`;

    constructor(public isLoading: boolean) {}
  }

  export class AddItems {
    static readonly type = `${ACTION_TYPE} AddItems`;

    constructor(public items: AnimalApiModel[]) {}
  }

  export class DeleteItems {
    static readonly type = `${ACTION_TYPE} DeleteItems`;

    constructor(public items: AnimalApiModel[]) {}
  }
}

@State<AnimalStoreModel>({
  name: "animalStoreState",
  defaults: {
    success: true,
    message: "",
    isLoading: false,
    items: [
      { id: 0, name: "dog" }
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
    ctx.setState({
      ...state,
      success: action.success,
      message: action.message
    });
  }

  @Action(AnimalStoreAction.SetIsLoading)
  setIsLoading(ctx: StateContext<AnimalStoreModel>, action: AnimalStoreAction.SetIsLoading) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      isLoading: action.isLoading
    });
  }

  @Action(AnimalStoreAction.AddItems)
  addItems(ctx: StateContext<AnimalStoreModel>, action: AnimalStoreAction.AddItems) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: [...state.items, ...action.items]
    });
  }

  @Action(AnimalStoreAction.DeleteItems)
  deleteItems(ctx: StateContext<AnimalStoreModel>, action: AnimalStoreAction.DeleteItems) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: state.items.filter(stateItem => !action.items.some(actionItem => actionItem.id === stateItem.id))
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

    it("Should select the init value of the get status selector", () => {
      const status = store.selectSnapshot(AnimalStoreState.getStatus);
      expect(status).toEqual({ success: true, message: "" });
    });

    it("Should select the init value of the get is loading selector", () => {
      const isLoading = store.selectSnapshot(AnimalStoreState.getIsLoading);
      expect(isLoading).toBeFalsy();
    });

    it("Should select the init value of the get items selector", () => {
      const items = store.selectSnapshot(AnimalStoreState.getItems);
      expect(items).toEqual([{ id: 0, name: "dog" }]);
    });

    it("Should select the init value of the get selected item selector", () => {
      const selectedItem = store.selectSnapshot(AnimalStoreState.getSelectedItem);
      expect(selectedItem).toBeUndefined();
    });

    it("Should correctry set the status", () => {
      store.dispatch(new AnimalStoreAction.SetStatus(true, "Lorem ipsum")).pipe(
        switchMap(() => store.selectOnce(AnimalStoreState.getStatus)),
        tap(status => expect(status).toEqual({ success: true, message: "Lorem ipsum" }))
      ).subscribe();
    });

    it("Should correctry set the is loading", () => {
      store.dispatch(new AnimalStoreAction.SetIsLoading(true)).pipe(
        switchMap(() => store.selectOnce(AnimalStoreState.getIsLoading)),
        tap(status => expect(status).toBeTruthy())
      ).subscribe();
    });

    it("Should correctry add items", () => {
      store.dispatch(new AnimalStoreAction.AddItems([{ id: 1, name: "cat" }])).pipe(
        switchMap(() => store.selectOnce(AnimalStoreState.getItems)),
        tap(items => expect(items).toEqual([{ id: 0, name: "dog" }, { id: 1, name: "cat" }]))
      ).subscribe();
    });

    it("Should correctry delete items", () => {
      store.dispatch(new AnimalStoreAction.DeleteItems([{ id: 0, name: "dog" }])).pipe(
        switchMap(() => store.selectOnce(AnimalStoreState.getItems)),
        tap(items => expect(items).toEqual([]))
      ).subscribe();
    });
});
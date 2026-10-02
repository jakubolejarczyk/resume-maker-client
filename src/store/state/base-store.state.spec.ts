import { Action, provideStore, Selector, State, StateContext, Store } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { TestBed } from "@angular/core/testing";

import { AnimalApiModel } from "../../api/service/base-api.service.spec";
import { BaseStoreModel } from "../model/base-store.model";
import { BaseStoreState } from "./base-store.state";

type AnimalStoreModel = BaseStoreModel<AnimalApiModel>;

const ACTION_TYPE = "[AnimalStoreAction]";

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace AnimalStoreAction {
  export class SetIsLoading {
    static readonly type = `${ACTION_TYPE} SetIsLoading`;

    constructor(public isLoading: boolean) {}
  }
}

@State<AnimalStoreModel>({
  name: "animalStoreState",
  defaults: {
    success: true,
    message: "",
    isLoading: false,
    items: [],
    selectedItem: undefined
  }
})
@Injectable()
class AnimalStoreState extends BaseStoreState {
  @Selector()
  static getIsLoading(state: AnimalStoreModel) {
    return BaseStoreState.baseGetIsLoading(state);
  }

  @Action(AnimalStoreAction.SetIsLoading)
  setIsLoading(ctx: StateContext<AnimalStoreModel>, action: AnimalStoreAction.SetIsLoading) {
    this.baseSetIsLoading(ctx, action.isLoading);
  }
}

describe("Store", () => {
    let store: Store;

    beforeEach(() => {
      TestBed.configureTestingModule({
          providers: [
            BaseStoreState,
            AnimalStoreState,
            provideStore([AnimalStoreState])
          ]
      });
      store = TestBed.inject(Store);
    });

    it("test", () => {
      store.dispatch(new AnimalStoreAction.SetIsLoading(true)).subscribe(() => {
        const isLoading = store.selectSnapshot(AnimalStoreState.getIsLoading);
        expect(isLoading).toBeTruthy();
      });
    });
});
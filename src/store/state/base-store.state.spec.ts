import { Store } from "@ngxs/store";
import { TestBed } from "@angular/core/testing";
import { switchMap, tap } from "rxjs";

import { ANIMAL_STORE_PROVIDER } from "../provider/animal-store.provider";
import { AnimalStoreState } from "./animal-store.state";
import { AnimalStoreAction } from "../action/animal-store.action";

describe("Store", () => {
    let store: Store;

    beforeEach(() => {
      TestBed.configureTestingModule({ providers: ANIMAL_STORE_PROVIDER });
      store = TestBed.inject(Store);
      store.dispatch(new AnimalStoreAction.SetItems([
        { id: 0, name: "Dog", order: 0 },
        { id: 1, name: "Cat", order: 1 }
      ]));
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
        { id: 0, name: "Dog", order: 0 },
        { id: 1, name: "Cat", order: 1 }
      ]);
    });

    it("Should select the value of the selected item from the store.", () => {
      const selectedItem = store.selectSnapshot(AnimalStoreState.getSelectedItem);
      expect(selectedItem).toBeUndefined();
    });

    it("Should select the value of the columns from the store.", () => {
      const columns = store.selectSnapshot(AnimalStoreState.getColumns);
      expect(columns).toEqual([
        { id: "id", label: "Id", isVisible: true, type: "string" },
        { id: "name", label: "Name", isVisible: true, type: "string" },
        { id: "order", label: "Order", isVisible: true, type: "string" }
      ]);
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
        { id: 0, name: "Bird", order: 0 },
        { id: 1, name: "Rabbit", order: 1 }
      ])).pipe(
        switchMap(() => store.selectOnce(AnimalStoreState.getItems)),
        tap(items => expect(items).toEqual([
          { id: 0, name: "Bird", order: 0 },
          { id: 1, name: "Rabbit", order: 1 }
        ]))
      ).subscribe();
    });

    it("Should correctry add the item to the store if not exists.", () => {
      store.dispatch(new AnimalStoreAction.AddItem({ id: 2, name: "Rabbit", order: 2 })).pipe(
        switchMap(() => store.selectOnce(AnimalStoreState.getItems)),
        tap(items => expect(items).toEqual([
          { id: 0, name: "Dog", order: 0 },
          { id: 1, name: "Cat", order: 1 },
          { id: 2, name: "Rabbit", order: 2 }
        ]))
      ).subscribe();
    });

    it("Should correctry skip adding the item to the store if already exists.", () => {
      store.dispatch(new AnimalStoreAction.AddItem({ id: 0, name: "Dog", order: 0 })).pipe(
        switchMap(() => store.selectOnce(AnimalStoreState.getItems)),
        tap(items => expect(items).toEqual([
          { id: 0, name: "Dog", order: 0 },
          { id: 1, name: "Cat", order: 1 }
        ]))
      ).subscribe();
    });

    it("Should correctry update the item in the store if exists.", () => {
      store.dispatch(new AnimalStoreAction.UpdateItem({ id: 0, name: "Rabbit", order: 0 })).pipe(
        switchMap(() => store.selectOnce(AnimalStoreState.getItems)),
        tap(items => expect(items).toEqual([
          { id: 0, name: "Rabbit", order: 0 },
          { id: 1, name: "Cat", order: 1 }
        ]))
      ).subscribe();
    });

    it("Should correctry skip updating the item in the store if not exists.", () => {
      store.dispatch(new AnimalStoreAction.UpdateItem({ id: 2, name: "Rabbit", order: 2 })).pipe(
        switchMap(() => store.selectOnce(AnimalStoreState.getItems)),
        tap(items => expect(items).toEqual([
          { id: 0, name: "Dog", order: 0 },
          { id: 1, name: "Cat", order: 1 }
        ]))
      ).subscribe();
    });

    it("Should correctry delete the item in the store if exists.", () => {
      store.dispatch(new AnimalStoreAction.DeleteItem(0)).pipe(
        switchMap(() => store.selectOnce(AnimalStoreState.getItems)),
        tap(items => expect(items).toEqual([
          { id: 1, name: "Cat", order: 1 }
        ]))
      ).subscribe();
    });

    it("Should correctry skip deleting the item in the store if not exists.", () => {
      store.dispatch(new AnimalStoreAction.DeleteItem(2)).pipe(
        switchMap(() => store.selectOnce(AnimalStoreState.getItems)),
        tap(items => expect(items).toEqual([
          { id: 0, name: "Dog", order: 0 },
          { id: 1, name: "Cat", order: 1 }
        ]))
      ).subscribe();
    });

    it("Should correctry select the item in the store.", () => {
      store.dispatch(new AnimalStoreAction.SetSelectedItem({ id: 0, name: "Dog", order: 0 })).pipe(
        switchMap(() => store.selectOnce(AnimalStoreState.getSelectedItem)),
        tap(selectedItem => expect(selectedItem).toEqual({ id: 0, name: "Dog", order: 0 }))
      ).subscribe();
    });
});
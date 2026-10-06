import { Injectable } from "@angular/core";

import { BaseService } from "./base.service";
import { AnimalApiModel } from "../api/model/animal-api.model";
import { AnimalApiService } from "../api/service/animal-api.service";
import { AnimalStoreAction } from "../store/action/animal-store.action";
import { AnimalStoreState } from "../store/state/animal-store.state";

@Injectable()
export class AnimalService extends BaseService<AnimalApiModel> {
    constructor() {
        super(
            AnimalApiService,
            AnimalStoreState.getStatus,
            AnimalStoreState.getIsLoading,
            AnimalStoreState.getItems,
            AnimalStoreState.getSelectedItem,
            AnimalStoreState.getColumns,
            AnimalStoreAction.SetStatus,
            AnimalStoreAction.SetIsLoading,
            AnimalStoreAction.SetItems,
            AnimalStoreAction.AddItem,
            AnimalStoreAction.UpdateItem,
            AnimalStoreAction.DeleteItem,
            AnimalStoreAction.SetSelectedItem
        );
    }
}
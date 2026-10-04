import { Injectable } from "@angular/core";

import { BaseService } from "./base.service";
import { UserApiModel } from "../api/model/user-api.model";
import { UserApiService } from "../api/service/user-api.service";
import { UserStoreState } from "../store/state/user-store.state";
import { UserStoreAction } from "../store/action/user-store.action";

@Injectable({ providedIn: "root" })
export class UserService extends BaseService<UserApiModel> {
    constructor() {
        super(
            UserApiService,
            UserStoreState.getStatus,
            UserStoreState.getIsLoading,
            UserStoreState.getItems,
            UserStoreState.getSelectedItem,
            UserStoreAction.SetStatus,
            UserStoreAction.SetIsLoading,
            UserStoreAction.SetItems,
            UserStoreAction.AddItem,
            UserStoreAction.UpdateItem,
            UserStoreAction.DeleteItem,
            UserStoreAction.SetSelectedItem
        );
    }
}
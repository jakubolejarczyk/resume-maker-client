import { Injectable } from "@angular/core";

import { BaseService } from "./base.service";
import { ExperienceApiModel } from "../api/model/experience-api.model";
import { ExperienceApiService } from "../api/service/experience-api.service";
import { ExperienceStoreAction } from "../store/action/experience-store.action";
import { ExperienceStoreState } from "../store/state/experience-store.state";

@Injectable({ providedIn: "root" })
export class ExperienceService extends BaseService<ExperienceApiModel> {
    constructor() {
        super(
            ExperienceApiService,
            ExperienceStoreState.getStatus,
            ExperienceStoreState.getIsLoading,
            ExperienceStoreState.getItems,
            ExperienceStoreState.getSelectedItem,
            ExperienceStoreState.getColumns,
            ExperienceStoreAction.SetStatus,
            ExperienceStoreAction.SetIsLoading,
            ExperienceStoreAction.SetItems,
            ExperienceStoreAction.AddItem,
            ExperienceStoreAction.UpdateItem,
            ExperienceStoreAction.DeleteItem,
            ExperienceStoreAction.SetSelectedItem
        );
    }
}
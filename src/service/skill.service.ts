import { Injectable } from "@angular/core";

import { BaseService } from "./base.service";
import { SkillApiModel } from "../api/model/skill-api.model";
import { SkillApiService } from "../api/service/skill-api.service";
import { SkillStoreAction } from "../store/action/skill-store.action";
import { SkillStoreState } from "../store/state/skill-store.state";

@Injectable({ providedIn: "root" })
export class SkillService extends BaseService<SkillApiModel> {
    constructor() {
        super(
            SkillApiService,
            SkillStoreState.getStatus,
            SkillStoreState.getIsLoading,
            SkillStoreState.getItems,
            SkillStoreState.getSelectedItem,
            SkillStoreState.getColumns,
            SkillStoreAction.SetStatus,
            SkillStoreAction.SetIsLoading,
            SkillStoreAction.SetItems,
            SkillStoreAction.AddItem,
            SkillStoreAction.UpdateItem,
            SkillStoreAction.DeleteItem,
            SkillStoreAction.SetSelectedItem
        );
    }
}
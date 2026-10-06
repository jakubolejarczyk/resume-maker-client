import { Injectable } from "@angular/core";

import { BaseService } from "./base.service";
import { EducationApiModel } from "../api/model/education-api.model";
import { EducationApiService } from "../api/service/education-api.service";
import { EducationStoreAction } from "../store/action/education-store.action";
import { EducationStoreState } from "../store/state/education-store.state";

@Injectable({ providedIn: "root" })
export class EducationService extends BaseService<EducationApiModel> {
    constructor() {
        super(
            EducationApiService,
            EducationStoreState.getStatus,
            EducationStoreState.getIsLoading,
            EducationStoreState.getItems,
            EducationStoreState.getSelectedItem,
            EducationStoreState.getColumns,
            EducationStoreAction.SetStatus,
            EducationStoreAction.SetIsLoading,
            EducationStoreAction.SetItems,
            EducationStoreAction.AddItem,
            EducationStoreAction.UpdateItem,
            EducationStoreAction.DeleteItem,
            EducationStoreAction.SetSelectedItem
        );
    }
}
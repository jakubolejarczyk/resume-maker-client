import { Injectable } from "@angular/core";

import { BaseService } from "./base.service";
import { ResumeApiModel } from "../api/model/resume-api.model";
import { ResumeStoreAction } from "../store/action/resume-store.action";
import { ResumeStoreState } from "../store/state/resume-store.state";
import { ResumeApiService } from "../api/service/resume-api.service";

@Injectable({ providedIn: "root" })
export class ResumeService extends BaseService<ResumeApiModel> {
    constructor() {
        super(
            ResumeApiService,
            ResumeStoreState.getStatus,
            ResumeStoreState.getIsLoading,
            ResumeStoreState.getItems,
            ResumeStoreState.getSelectedItem,
            ResumeStoreState.getColumns,
            ResumeStoreAction.SetStatus,
            ResumeStoreAction.SetIsLoading,
            ResumeStoreAction.SetItems,
            ResumeStoreAction.AddItem,
            ResumeStoreAction.UpdateItem,
            ResumeStoreAction.DeleteItem,
            ResumeStoreAction.SetSelectedItem
        );
    }
}
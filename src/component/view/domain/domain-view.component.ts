import { Component, input } from "@angular/core";

import { BaseApiModel } from "../../../api/model/base-api.model";
import { BaseService } from "../../../service/base.service";
import { TableDataComponent } from "../../data/table/table-data.component";

@Component({
    selector: "app-domain-view-component",
    templateUrl: "./domain-view.component.html",
    imports: [TableDataComponent]
})
export class DomainViewComponent<TModel extends BaseApiModel> {
    baseServiceType = input.required<typeof BaseService<TModel>>();
}
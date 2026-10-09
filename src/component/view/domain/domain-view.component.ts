import { Component, input } from "@angular/core";

import { TableSmartComponent } from "../../smart/table/table-smart.component";
import { BaseApiModel } from "../../../api/model/base-api.model";
import { BaseService } from "../../../service/base.service";

@Component({
    selector: "app-domain-view-component",
    templateUrl: "./domain-view.component.html",
    imports: [TableSmartComponent]
})
export class DomainViewComponent<TModel extends BaseApiModel> {
    baseServiceType = input.required<typeof BaseService<TModel>>();
}
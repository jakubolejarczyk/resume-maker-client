import { Component, input } from "@angular/core";

import { TableSmartComponent } from "../../smart/table/table-smart.component";
import { BaseService } from "../../../service/base.service";
import { BaseApiModel } from "../../../api/model/base-api.model";

@Component({
    selector: "entity-view-component",
    templateUrl: "./entity-view.component.html",
    imports: [TableSmartComponent]
})
export class EntityViewComponent<TModel extends BaseApiModel> {
    baseServiceType = input.required<typeof BaseService<TModel>>();
}
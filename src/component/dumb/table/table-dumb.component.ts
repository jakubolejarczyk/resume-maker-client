import { Component, input } from "@angular/core";
import { TableModule } from 'primeng/table';
import { BaseApiModel } from "../../../api/model/base-api.model";
import { BaseStoreModel } from "../../../store/model/base-store.model";

@Component({
    selector: "table-dumb-component",
    templateUrl: "./table-dumb.component.html",
    imports: [TableModule]
})
export class TableDumbComponent<TModel extends BaseApiModel> {
    columns = input.required<BaseStoreModel<TModel>["columns"]>();

    items = input.required<BaseApiModel[]>();
}
import { Component, input, output } from "@angular/core";
import { TableModule } from 'primeng/table';

import { ButtonFormComponent } from "../../form/button/button-form.component";
import { BaseApiModel } from "../../../api/model/base-api.model";
import { BaseStoreModel } from "../../../store/model/base-store.model";

@Component({
    selector: "app-table-data-component",
    templateUrl: "./table-data.component.html",
    imports: [TableModule, ButtonFormComponent]
})
export class TableDataComponent<TModel extends BaseApiModel> {
    columns = input.required<BaseStoreModel<TModel>["columns"]>();
    items = input.required<BaseApiModel[]>();

    onDeleteEvent = output<TModel>();

    onDelete(item: TModel) {
        this.onDeleteEvent.emit(item);
    }
}
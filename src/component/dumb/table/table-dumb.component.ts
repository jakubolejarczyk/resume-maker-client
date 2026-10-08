import { Component, input, output } from "@angular/core";
import { TableModule } from 'primeng/table';

import { BaseApiModel } from "../../../api/model/base-api.model";
import { BaseStoreModel } from "../../../store/model/base-store.model";
import { ButtonDumbComponent } from "../button/button-dumb.component";

@Component({
    selector: "table-dumb-component",
    templateUrl: "./table-dumb.component.html",
    imports: [TableModule, ButtonDumbComponent]
})
export class TableDumbComponent<TModel extends BaseApiModel> {
    columns = input.required<BaseStoreModel<TModel>["columns"]>();

    items = input.required<TModel[]>();

    onDeleteEvent = output<number>();

    onDelete(id: number) {
        this.onDeleteEvent.emit(id);
    }
}
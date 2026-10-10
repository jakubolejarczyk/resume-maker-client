import { Component, input, output } from "@angular/core";
import { TableModule } from 'primeng/table';

import { BaseApiModel } from "../../../api/model/base-api.model";
import { BaseStoreModel } from "../../../store/model/base-store.model";
import { ButtonDumbComponent } from "../button/button-dumb.component";
import { InputTextDumbComponent } from "../input-text/input-text-dumb.component";

@Component({
    selector: "app-table-dumb-component",
    templateUrl: "./table-dumb.component.html",
    imports: [TableModule, ButtonDumbComponent, InputTextDumbComponent]
})
export class TableDumbComponent<TModel extends BaseApiModel> {
    columns = input.required<BaseStoreModel<TModel>["columns"]>();

    items = input.required<TModel[]>();

    deleteEvent = output<number>();

    onDelete(id: number) {
        this.deleteEvent.emit(id);
    }
}
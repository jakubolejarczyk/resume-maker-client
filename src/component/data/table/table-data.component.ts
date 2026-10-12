import { Component, input, output } from "@angular/core";
import { TableModule } from 'primeng/table';
import { Observable } from "rxjs";
import { AsyncPipe } from "@angular/common";

import { ButtonFormComponent } from "../../form/button/button-form.component";
import { BaseApiModel } from "../../../api/model/base-api.model";
import { BaseStoreModel } from "../../../store/model/base-store.model";
import { BadgeMiscComponent } from "../../misc/badge/badge-misc.component";

@Component({
    selector: "app-table-data-component",
    templateUrl: "./table-data.component.html",
    styleUrl: "./table-data.component.scss",
    imports: [TableModule, ButtonFormComponent, BadgeMiscComponent, AsyncPipe]
})
export class TableDataComponent<TModel extends BaseApiModel> {
    columns = input.required<BaseStoreModel<TModel>["columns"]>();
    items = input.required<BaseApiModel[]>();

    selectedItem$ = input.required<Observable<BaseApiModel | undefined>>();

    onSelectEvent = output<TModel>();
    onDeselectEvent = output();
    onShowEvent = output<TModel>();
    onUpdateEvent = output<TModel>();
    onDeleteEvent = output<TModel>();
    onMoveUpEvent = output<TModel>();
    onMoveDownEvent = output<TModel>();

    onSelect(item: TModel) {
        this.onSelectEvent.emit(item);
    }

    onDeselect() {
        this.onDeselectEvent.emit();
    }

    onShow(item: TModel) {
        this.onShowEvent.emit(item);
    }

    onUpdate(item: TModel) {
        this.onUpdateEvent.emit(item);
    }

    onDelete(item: TModel) {
        this.onDeleteEvent.emit(item);
    }

    onMoveUp(item: TModel) {
        this.onMoveUpEvent.emit(item);
    }

    onMoveDown(item: TModel) {
        this.onMoveDownEvent.emit(item);
    }

    isFirstItem(item: TModel) {
        return item.order === 0;
    }

    isLastItem(item: TModel) {
        return item.order === this.items()[this.items().length - 1].order;
    }
}
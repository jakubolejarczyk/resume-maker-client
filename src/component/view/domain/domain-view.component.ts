import { ChangeDetectorRef, Component, inject, Injector, input, OnDestroy, OnInit } from "@angular/core";
import { combineLatest, map, Subscription, switchMap } from "rxjs";

import { TableDataComponent } from "../../data/table/table-data.component";
import { BaseApiModel } from "../../../api/model/base-api.model";
import { BaseService } from "../../../service/base.service";
import { BaseStoreModel } from "../../../store/model/base-store.model";
import { DialogOverlayComponent } from "../../overlay/dialog/dialog-overlay.component";
import { ToolbarPanelComponent } from "../../panel/toolbar/toolbar-panel.component";
import { ConfirmationUtil } from "../../../util/confirmation.util";

@Component({
    selector: "app-domain-view-component",
    templateUrl: "./domain-view.component.html",
    imports: [TableDataComponent, DialogOverlayComponent, ToolbarPanelComponent]
})
export class DomainViewComponent<TModel extends BaseApiModel> implements OnInit, OnDestroy {
    private readonly cdr = inject(ChangeDetectorRef);
    private readonly injector = inject(Injector);
    private baseService!: BaseService<TModel>;
    private sub!: Subscription;

    private readonly confirmationUtil = inject(ConfirmationUtil);

    baseServiceType = input.required<typeof BaseService<TModel>>();

    columns: BaseStoreModel<TModel>["columns"] = [];
    items: BaseApiModel[] = [];

    label = "";
    item: TModel | undefined;

    ngOnInit() {
        this.baseService = this.injector.get(this.baseServiceType());
        this.sub = this.baseService.readAll().pipe(
            switchMap(() => combineLatest({
                columns: this.baseService.getColumns(),
                items: this.baseService.getItems()
            })),
            map(({ columns, items }) => {
                this.columns = columns;
                this.items = items;
            })
        ).subscribe();
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onCreateEvent() {
        console.log("create");
    }

    onSelectEvent(item: TModel) {
        this.baseService.selectItem(item).subscribe();
    }

    onShowEvent(item: TModel) {
        console.log("show", item);
    }

    onUpdateEvent(item: TModel) {
        console.log("update", item);
        // this.label = "Update";
        // this.item = item;
    }

    onDeleteEvent(item: TModel) {
        this.confirmationUtil.confirm(
            "Are you sure you want to proceed with the deletion? This action cannot be undone.",
            "Confirm Delete",
            "Delete",
            () => this.onDelete(item));
    }

    onMoveUpEvent(item: TModel) {
        console.log("move up", item);
    }

    onMoveDownEvent(item: TModel) {
        console.log("move down", item);
    }

    onDelete(item: TModel) {
        this.baseService.delete(item).subscribe(() => {
            this.cdr.markForCheck()
        });
    }
}
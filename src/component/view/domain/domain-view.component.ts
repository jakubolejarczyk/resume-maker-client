import { ChangeDetectorRef, Component, inject, Injector, input, OnDestroy, OnInit } from "@angular/core";
import { combineLatest, map, Subscription, switchMap } from "rxjs";

import { TableDataComponent } from "../../data/table/table-data.component";
import { BaseApiModel } from "../../../api/model/base-api.model";
import { BaseService } from "../../../service/base.service";
import { BaseStoreModel } from "../../../store/model/base-store.model";
import { ConfirmationUtil } from "../../../util/confirmation.util";
import { DialogOverlayComponent } from "../../overlay/dialog/dialog-overlay.component";

@Component({
    selector: "app-domain-view-component",
    templateUrl: "./domain-view.component.html",
    imports: [TableDataComponent, DialogOverlayComponent]
})
export class DomainViewComponent<TModel extends BaseApiModel> implements OnInit, OnDestroy {
    private cdr = inject(ChangeDetectorRef);
    private readonly injector = inject(Injector);
    private baseService!: BaseService<TModel>;
    private sub!: Subscription;

    private readonly confirmationUtil = inject(ConfirmationUtil);

    baseServiceType = input.required<typeof BaseService<TModel>>();

    columns: BaseStoreModel<TModel>["columns"] = [];
    items: BaseApiModel[] = [];

    label = "";
    itemToUpdate: TModel | undefined;

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

    onUpdateEvent(item: TModel) {
        this.label = "Update";
        this.itemToUpdate = item;
    }

    onDeleteEvent(item: TModel) {
        this.confirmationUtil.confirm(
            "Are you sure you want to proceed with the deletion? This action cannot be undone.",
            "Confirm Delete",
            "Delete",
            () => this.baseService.delete(item).subscribe(() => this.cdr.markForCheck()));
    }
}
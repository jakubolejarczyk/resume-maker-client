import { ChangeDetectorRef, Component, inject, Injector, input, OnDestroy, OnInit } from "@angular/core";
import { Observable, of, Subscription } from "rxjs";

import { TableDataComponent } from "../../data/table/table-data.component";
import { BaseApiModel } from "../../../api/model/base-api.model";
import { BaseService } from "../../../service/base.service";
import { BaseStoreModel } from "../../../store/model/base-store.model";
import { ToolbarPanelComponent } from "../../panel/toolbar/toolbar-panel.component";
import { ConfirmationUtil } from "../../../util/confirmation.util";

@Component({
    selector: "app-domain-view-component",
    templateUrl: "./domain-view.component.html",
    imports: [TableDataComponent, ToolbarPanelComponent]
})
export class DomainViewComponent<TModel extends BaseApiModel> implements OnInit, OnDestroy {
    private readonly cdr = inject(ChangeDetectorRef);
    private readonly injector = inject(Injector);
    private baseService!: BaseService<TModel>;
    private sub!: Subscription;

    private readonly confirmationUtil = inject(ConfirmationUtil);

    baseServiceType = input.required<typeof BaseService<TModel>>();

    label = "";
    item: TModel | undefined;

    selectedItem$: Observable<BaseApiModel | undefined> = of(undefined);
    items$: Observable<BaseApiModel[]> = of([]);
    columns$: Observable<BaseStoreModel<TModel>["columns"]> = of([]);

    ngOnInit() {
        this.baseService = this.injector.get(this.baseServiceType());
        this.sub = this.baseService.readAll().subscribe(() => {
            this.selectedItem$ = this.baseService.getSelectedItem();
            this.items$ = this.baseService.getItems();
            this.columns$ = this.baseService.getColumns();
        });
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

    onDeselectEvent() {
        this.baseService.deselectItem().subscribe();
    }

    onShowEvent(item: TModel) {
        console.log("show", item);
    }

    onUpdateEvent(item: TModel) {
        console.log("update", item);
    }

    onDeleteEvent(item: TModel) {
        this.confirmationUtil.confirm(
            "Are you sure you want to proceed with the deletion? This action cannot be undone.",
            "Confirm Delete",
            "Delete",
            () => this.onDelete(item));
    }

    onMoveUpEvent(item: TModel) {
        this.baseService.moveUp(item).subscribe(() => {
            this.cdr.markForCheck();
        });
    }

    onMoveDownEvent(item: TModel) {
        this.baseService.moveDown(item).subscribe();
    }

    onDelete(item: TModel) {
        this.baseService.delete(item).subscribe();
    }
}
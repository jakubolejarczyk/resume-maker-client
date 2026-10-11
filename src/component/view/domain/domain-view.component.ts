import { Component, inject, Injector, input, OnDestroy, OnInit } from "@angular/core";
import { combineLatest, map, Subscription, switchMap } from "rxjs";

import { TableDataComponent } from "../../data/table/table-data.component";
import { BaseApiModel } from "../../../api/model/base-api.model";
import { BaseService } from "../../../service/base.service";
import { BaseStoreModel } from "../../../store/model/base-store.model";

@Component({
    selector: "app-domain-view-component",
    templateUrl: "./domain-view.component.html",
    imports: [TableDataComponent]
})
export class DomainViewComponent<TModel extends BaseApiModel> implements OnInit, OnDestroy {
    private readonly injector = inject(Injector);
    private baseService!: BaseService<TModel>;
    private sub!: Subscription;

    baseServiceType = input.required<typeof BaseService<TModel>>();

    columns: BaseStoreModel<TModel>["columns"] = [];
    items: BaseApiModel[] = [];

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

    onDelete(item: TModel) {
        this.baseService.delete(item).subscribe().unsubscribe();
    }
}
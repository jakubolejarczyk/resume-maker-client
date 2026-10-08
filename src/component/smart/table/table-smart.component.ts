import { Component, inject, Injector, input, OnDestroy, OnInit } from "@angular/core";
import { combineLatest, Subscription, switchMap } from "rxjs";

import { TableDumbComponent } from "../../dumb/table/table-dumb.component";
import { BaseApiModel } from "../../../api/model/base-api.model";
import { BaseService } from "../../../service/base.service";
import { BaseStoreModel } from "../../../store/model/base-store.model";

@Component({
    selector: "table-smart-component",
    templateUrl: "./table-smart.component.html",
    imports: [TableDumbComponent]
})
export class TableSmartComponent<TModel extends BaseApiModel> implements OnInit, OnDestroy {
    private injector = inject(Injector);

    baseServiceType = input.required<typeof BaseService<TModel>>();

    baseService!: BaseService<TModel>;

    sub!: Subscription;

    columns!: BaseStoreModel<TModel>["columns"];

    items!: BaseApiModel[];

    ngOnInit() {
        this.baseService = this.injector.get(this.baseServiceType());
        this.baseService.readAll();
        this.sub = this.baseService.readAll().pipe(
            switchMap(() => combineLatest({
                columns: this.baseService.getColumns(),
                items: this.baseService.getItems()
            }))
        ).subscribe(({ columns, items }) => {
            this.columns = columns;
            this.items = items;
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onDelete(id: number) {
        this.baseService.delete(id).subscribe(() => {
            alert("To remove :d");
        });
    }
}
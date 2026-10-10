import { Component, inject, Injector, input, OnDestroy, OnInit } from "@angular/core";
import { TableModule } from 'primeng/table';
import { combineLatest, map, of, Subscription, switchMap } from "rxjs";
import { AsyncPipe } from "@angular/common";

import { ButtonFormComponent } from "../../form/button/button-form.component";
import { BaseApiModel } from "../../../api/model/base-api.model";
import { BaseService } from "../../../service/base.service";
import { BaseStoreModel } from "../../../store/model/base-store.model";

@Component({
    selector: "app-table-data-component",
    templateUrl: "./table-data.component.html",
    imports: [TableModule, ButtonFormComponent, AsyncPipe]
})
export class TableDataComponent<TModel extends BaseApiModel> implements OnInit, OnDestroy {
    private injector = inject(Injector);

    baseService!: BaseService<TModel>;
    sub!: Subscription;
    
    columns: BaseStoreModel<TModel>["columns"] = [];
    
    items: BaseApiModel[] = [];

    baseServiceType = input.required<typeof BaseService<TModel>>();

    ngOnInit() {
        this.baseService = this.injector.get(this.baseServiceType());
        this.sub = of(true).pipe(
            switchMap(() => this.baseService.readAll()),
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
}
import { Component, inject, OnDestroy, OnInit } from "@angular/core";

import { TableDumbComponent } from "../../dumb/table/table-dumb.component";
import { AnimalService } from "../../../service/animal.service";
import { Subscription } from "rxjs";

@Component({
    selector: "table-smart-component",
    templateUrl: "./table-smart.component.html",
    imports: [TableDumbComponent]
})
export class TableSmartComponent implements OnInit, OnDestroy {
    service = inject(AnimalService);

    sub!: Subscription;

    columns: string[] = [];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    items: any = [];

    ngOnInit() {
        this.sub = this.service.getColumns().subscribe(columns => {
            this.columns = columns;
        });
        this.service.getItems().subscribe(items => {
            this.items = items;
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
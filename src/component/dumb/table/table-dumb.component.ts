import { Component, input } from "@angular/core";
import { TableModule } from 'primeng/table';

@Component({
    selector: "table-dumb-component",
    templateUrl: "./table-dumb.component.html",
    imports: [TableModule]
})
export class TableDumbComponent {
    columns = input.required<string[]>();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    items = input.required<any>();
}
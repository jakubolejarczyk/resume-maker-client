import { Component } from "@angular/core";


@Component({
    selector: "app-domain-view-component",
    template: ""
    // templateUrl: "./domain-view.component.html",
    // imports: [TableDataComponent]
})
export class DomainViewComponent { //<TModel extends BaseApiModel> implements OnInit, OnDestroy {
    // ngOnInit(): void {
    //     throw new Error("Method not implemented.");
    // }
    // ngOnDestroy(): void {
    //     throw new Error("Method not implemented.");
    // }
    // private injector = inject(Injector);
    
    // baseService!: BaseService<TModel>;

    // baseServiceType = input.required<typeof BaseService<TModel>>();

    // onDelete(item: TModel) {
    //     alert(item.id);
    // }

    // sub!: Subscription;
    
    // columns: BaseStoreModel<TModel>["columns"] = [];
    
    // baseServiceType = input.required<typeof BaseService<TModel>>();

    // items: BaseApiModel[] = [];

    // baseServiceType = input.required<typeof BaseService<TModel>>();

    // onDeleteEvent = output<TModel>();

    // ngOnInit() {
    //     this.baseService = this.injector.get(this.baseServiceType());
    //     this.sub = of(true).pipe(
    //         switchMap(() => this.baseService.readAll()),
    //         switchMap(() => combineLatest({
    //             columns: this.baseService.getColumns(),
    //             items: this.baseService.getItems()
    //         })),
    //         map(({ columns, items }) => {
    //             this.columns = columns;
    //             this.items = items;
    //         })
    //     ).subscribe();
    // }

    // ngOnDestroy() {
    //     this.sub.unsubscribe();
    // }

    // onDelete(item: TModel) {
    //     this.onDeleteEvent.emit(item);
    // }
}
import { ChangeDetectorRef, Component, inject, Injector, input, OnDestroy, OnInit } from "@angular/core";
import { combineLatest, map, Subscription, switchMap } from "rxjs";

import { TableDataComponent } from "../../data/table/table-data.component";
import { BaseApiModel } from "../../../api/model/base-api.model";
import { BaseService } from "../../../service/base.service";
import { BaseStoreModel } from "../../../store/model/base-store.model";
import { ConfirmationService, MessageService } from "primeng/api";

@Component({
    selector: "app-domain-view-component",
    templateUrl: "./domain-view.component.html",
    imports: [TableDataComponent]
})
export class DomainViewComponent<TModel extends BaseApiModel> implements OnInit, OnDestroy {
    private cdr = inject(ChangeDetectorRef);
    private confirmationService = inject(ConfirmationService);
    private messageService = inject(MessageService);
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
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            closable: true,
            closeOnEscape: true,
            icon: 'pi pi-exclamation-triangle',
            rejectButtonProps: {
                label: 'Cancel',
                severity: 'secondary',
                outlined: true
            },
            acceptButtonProps: {
                label: 'Save',
                severity: 'secondary'
            },
            accept: () => {
                this.baseService.delete(item).subscribe(() => this.cdr.markForCheck());
                this.messageService.add({ severity: 'secondary', summary: 'Confirmed', detail: 'You have accepted' });
            },
            reject: () => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Rejected',
                    detail: 'You have rejected',
                    life: 3000
                });
            }
        });
    }
}
// import { Component, input, output } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { ButtonModule } from 'primeng/button';
// import { ConfirmDialogModule } from 'primeng/confirmdialog';
// import { DialogModule } from 'primeng/dialog';
// import { InputTextModule } from 'primeng/inputtext';

// import { BaseApiModel } from '../../../api/model/base-api.model';
// import {
//   BaseStoreColumnModel,
//   BaseStoreModel,
// } from '../../../store/model/base-store.model';

// @Component({
//   selector: 'app-dialog-overlay-component',
//   templateUrl: './dialog-overlay.component.html',
//   imports: [
//     ConfirmDialogModule,
//     DialogModule,
//     ButtonModule,
//     InputTextModule,
//     FormsModule,
//   ],
// })
// export class DialogOverlayComponent<TModel extends BaseApiModel> {
//   label = input.required<string>();
//   columns = input.required<BaseStoreModel<TModel>['columns']>();
//   item = input<TModel>();

//   onCancelEvent = output();

//   onCancel() {
//     this.onCancelEvent.emit();
//   }

//   onSave() {
//     this.onCancelEvent.emit();
//   }

//   isVisible() {
//     return this.item() !== undefined;
//   }

//   getItemValue(column: BaseStoreColumnModel) {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const item: any = this.item();
//     console.log(item);
//     return item[column.id];
//   }
// }

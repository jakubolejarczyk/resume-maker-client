import { BaseStoreColumnModel } from '../../../store/model/base-store.model';

export interface DialogOverlayTriggerModel<TData> {
  id: 'update' | 'create';
  header: string;
  columns: BaseStoreColumnModel[];
  item: TData;
  itemId: number;
  parentId: number | undefined;
}
